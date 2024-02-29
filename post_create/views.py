from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required
from django.contrib import admin
from django.contrib.auth import authenticate, login as dj_login
from django.urls import path
from django.shortcuts import render
from django.shortcuts import HttpResponse
from django.shortcuts import redirect
from django.contrib.auth.models import User
from django.contrib.sessions.models import Session
from django.contrib import messages
from .forms import PostForm
from .forms import CommentForm  # 导入评论表单
from .models import Post, Comment, School, User_Info, User_Fav
from django.db.models import Avg
from django.utils import timezone
import pytz
from django.contrib.auth import logout
from django.http import JsonResponse
from django.http import HttpResponseRedirect
from django.urls import reverse
import json
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
import os

user_user_user = ""
from .forms import UserImageForm


# 登录页面
def login(request):
    return render(request, 'login.html')


# 注册页面
def register(request):
    return render(request, 'register.html')


def main(request):
    # 指定要访问的页面，render的功能：讲请求的页面结果提交给客户端
    return render(request, 'main1.html')


def save(request):
    has_regiter = 0  # 用来记录当前账号是否已存在，0：不存在 1：已存在
    a = request.GET  # 获取get()请求
    global Check_num
    # print(a)
    # 通过get()请求获取前段提交的数据
    userName = a.get('username')
    nickName = a.get('nickname')
    passWord = a.get('password')
    re_password = a.get('re_password')
    email = a.get('email')
    check_num = a.get('check_num')
    # 检查用户名是否为空
    if (userName == ''):
        return render(request, 'register.html', {'error': '用户名不能为空'})
    if (nickName == ''):
        return render(request, 'register.html', {'error': '昵称不能为空'})
    # 检查密码是否为空
    if (passWord == ''):
        return render(request, 'register.html', {'error': '密码不能为空'})
    # 检查邮箱是否为空
    if (email == ''):
        return render(request, 'register.html', {'error': '邮箱不能为空'})
    # 检查重复密码与密码是否相同
    if re_password != passWord:
        return render(request, 'register.html', {'error': '两次输入密码不同'})
    if check_num != Check_num:
        return render(request, 'register.html', {'error': '验证码错误'})
    print(userName, passWord)
    # 连接数据库
    if User.objects.filter(username=userName).exists():
        return render(request, 'register.html', {'error': '用户已存在'})
    else:
        user = User.objects.create_user(username=userName, password=passWord, email=email, first_name=nickName)
        user.save()
        register_date = timezone.now()
        china_timezone = pytz.timezone('Asia/Shanghai')
        registerdate = register_date.astimezone(china_timezone)
        user_info = User_Info.objects.create(user_name=userName, register_date=registerdate)
        user_info.save()
        print(user_info.user_name)
        messages.success(request, '注册成功')
        return redirect('/')


@login_required
def my_logout(request):
    logout(request)
    return redirect('/')


def query(request):
    a = request.GET
    userName = a.get('username')
    passWord = a.get('password')
    user = authenticate(request, username=userName, password=passWord)
    if user is not None:
        if user.is_active:
            dj_login(request, user)
            messages.success(request, '登录成功')
            return redirect('/')
        else:
            return render(request, 'login.html', {'error': '用户名或密码不正确'})
    else:
        return render(request, 'login.html', {'error': '用户名或密码不正确'})


@login_required
def index(request, school, sort):
    if sort == "总体":
        restaurants = Post.objects.filter(school_name=school).order_by('-avg_score')  # 获取所有商家
    if sort == "口味":
        restaurants = Post.objects.filter(school_name=school).order_by('-avg_score1')
    if sort == "环境":
        restaurants = Post.objects.filter(school_name=school).order_by('-avg_score2')
    if sort == "服务":
        restaurants = Post.objects.filter(school_name=school).order_by('-avg_score3')
    if sort == "性价比":
        restaurants = Post.objects.filter(school_name=school).order_by('-avg_score4')
    if sort == "评价":
        restaurants = Post.objects.filter(school_name=school).order_by('-comment_count')
    if sort == "人均最高":
        restaurants = Post.objects.filter(school_name=school).order_by('-avg_cost')
    if sort == "人均最低":
        restaurants = Post.objects.filter(school_name=school).order_by('avg_cost')
    return render(request, 'index.html', {'restaurants': restaurants, 'school': school, 'sort': sort})


# @login_required
# def index(request):
#     restaurants = Post.objects.filter(school_name="上海交通大学(闵行校区)")  # 获取所有商家
#     return render(request, 'index.html', {'restaurants': restaurants})

@login_required
def create_post(request, school):
    post_created = None  # 初始化 post_created 变量
    post_form = PostForm()
    if request.method == 'POST':
        post_form = PostForm(request.POST, request.FILES)

        # print("-1")
        print(post_form.data)  # 打印表单数据字典
        print(post_form.errors)
        if post_form.is_valid():
            post = post_form.save(commit=False)
            post.school_name = school
            school0 = School.objects.filter(name=school).first()
            school0.post_count += 1
            school0.save()
            # print("0")
            post.author = request.user.username  # 将当前用户分配为帖子的作者
            post.nickname = request.user.first_name
            print(request.user.first_name)
            if 'delivery' in request.POST and 'dinein' in request.POST:
                post.dining_methods = '堂食|外卖'
                # print("1")
            elif 'delivery' in request.POST:
                post.dining_methods = '外卖'
                # print("2")
            else:
                post.dining_methods = '堂食'
                # print("3")
            post.save()

            # 设置 post_created 变量
            post_created = post
            restaurants = Post.objects.filter(school_name=school).order_by('-avg_score')
            # target_url = reverse('index')
            # return HttpResponseRedirect(target_url + f'?restaurants={restaurants}&school={school}&sort="总体"')
            return redirect('../index/总体')  # 重定向到帖子列表页面
            # return render(request, 'index.html', {'restaurants': restaurants, 'school':school,'sort':"总体"})
        else:
            return render(request, 'create_post.html', {'post_form': post_form, 'school': school})
    else:
        post_form = PostForm()
        return render(request, 'create_post.html', {'post_form': post_form, 'school': school})


@login_required
def restaurant_detail(request, restaurant_id):
    # restaurant = Post.objects.get(custom_id=restaurant_id)
    restaurant = Post.objects.get(pk=restaurant_id)
    comments = Comment.objects.filter(post=restaurant)
    users = User_Info.objects.all()
    return render(request, 'post.html', {'restaurant': restaurant, 'comments': comments, 'users':users})


@csrf_exempt
@login_required
def create_comment(request, restaurant_id):
    restaurant = Post.objects.get(pk=restaurant_id)
    comments = Comment.objects.filter(post=restaurant)

    comment_form = CommentForm()  # 创建评论表单实例
    if request.method == 'POST':
        comment_form = CommentForm(request.POST, request.FILES)  # 绑定POST数据到评论表单
        if comment_form.is_valid():
            comment = comment_form.save(commit=False)
            comment.post = restaurant  # 关联评论到特定的餐厅
            comment.author = request.user.username  # 使用当前用户作为评论作者
            comment.nickname = request.user.first_name
            # 提取并存储用户提交的数据
            comment.per_person_cost = request.POST['per_person_cost']
            comment.score = request.POST['star_1']
            comment.score_1 = request.POST['star_2']
            comment.score_2 = request.POST['star_3']
            comment.score_3 = request.POST['star_4']
            comment.score_4 = request.POST['star_5']

            # 获取时间
            mid_comment_time = timezone.now()
            china_timezone = pytz.timezone('Asia/Shanghai')
            comment.comment_time = mid_comment_time.astimezone(china_timezone)
            restaurant.last_comment_time = comment.comment_time

            comment.save()

            # 计算并更新餐馆统计数据
            update_restaurant_statistics(restaurant)
            return redirect('../restaurant')
    return render(request, 'create_comment.html',
                  {'restaurant': restaurant, 'comments': comments, 'comment_form': comment_form})


def update_restaurant_statistics(restaurant):
    # 重新计算平均分数
    comments = Comment.objects.filter(post=restaurant)
    restaurant.avg_score1 = comments.aggregate(Avg('score_1'))['score_1__avg']
    restaurant.avg_score2 = comments.aggregate(Avg('score_2'))['score_2__avg']
    restaurant.avg_score3 = comments.aggregate(Avg('score_3'))['score_3__avg']
    restaurant.avg_score4 = comments.aggregate(Avg('score_4'))['score_4__avg']
    restaurant.avg_score = comments.aggregate(Avg('score'))['score__avg']
    restaurant.avg_cost = comments.aggregate(Avg('per_person_cost'))['per_person_cost__avg']

    # 更新其他统计数据，如高评数、中评数、低评数和评论总数
    restaurant.high_count = Comment.objects.filter(post=restaurant, score__gte=4.3).count()
    restaurant.mid_count = Comment.objects.filter(post=restaurant, score__gte=3, score__lt=4.3).count()
    restaurant.low_count = Comment.objects.filter(post=restaurant, score__lt=3).count()
    restaurant.comment_count = Comment.objects.filter(post=restaurant).count()

    # 更新最后评论时间
    last_comment = Comment.objects.filter(post=restaurant).order_by('-comment_time').first()
    if last_comment:
        restaurant.last_comment_time = last_comment.comment_time

    # 保存带有更新统计数据的餐馆
    restaurant.save()
    #         # 计算平均分和人均消费
    #         restaurant.avg_cost = comments.aggregate(Avg('per_person_cost'))['per_person_cost__avg']
    #         restaurant.avg_score1 = comments.aggregate(Avg('score_1'))['score_1__avg']
    #         restaurant.avg_score2 = comments.aggregate(Avg('score_2'))['score_2__avg']
    #         restaurant.avg_score3 = comments.aggregate(Avg('score_3'))['score_3__avg']
    #         restaurant.avg_score4 = comments.aggregate(Avg('score_4'))['score_4__avg']
    #         restaurant.avg_score = comments.aggregate(Avg('score'))['score__avg']
    #
    #         # 计算好评数
    #         restaurant.high_count = Comment.objects.filter(post=restaurant, score__gte=4.3).count()
    #         restaurant.mid_count = Comment.objects.filter(post=restaurant, score__gte=3, score__lt=4.3).count()
    #         restaurant.low_count = Comment.objects.filter(post=restaurant, score__lt=3).count()
    #         restaurant.comment_count = Comment.objects.filter(post=restaurant).count()
    #
    # # 获取时间
    # mid_comment_time = timezone.now()
    # china_timezone = pytz.timezone('Asia/Shanghai')
    # comment.comment_time = mid_comment_time.astimezone(china_timezone)
    # restaurant.last_comment_time = comment.comment_time
    #
    #         restaurant.save()
    #         comment.save()
    #
    # return render(request, 'create_comment.html', {'restaurant': restaurant, 'comments': comments, 'comment_form': comment_form})


def get_school_data(request):
    schools = School.objects.all()
    data = []
    for school in schools:
        parts = school.coordinates.split(",")
        # 将拆分的部分转换为浮点数或整数（根据需要）
        number1 = float(parts[0])  # 转换为浮点数
        number2 = float(parts[1])  # 
        data.append({
            'name': school.name,
            'value': [number1, number2, school.post_count]
        })
    return JsonResponse(data, safe=False)


def get_top_school_data(request):
    top_schools = School.objects.order_by('-post_count')[:5]
    top_schools = top_schools[::-1]
    # 构建数据字典
    data = {
        "school": [school.name for school in top_schools],
        "value": [school.post_count for school in top_schools]
    }
    return JsonResponse(data, safe=False)


# 发送验证码
@csrf_exempt
def reg_check(request):
    if request.method == 'POST':
        print(request.POST.get('email'))
        email = request.POST.get('email')
        if email == '' or email is None:
            return render(request, "register.html", {"error": "邮箱地址不能为空"})
        # 生成验证码
        import random
        str1 = '0123456789'
        rand_str = ''
        for i in range(0, 6):
            rand_str += str1[random.randrange(0, len(str1))]
        global Check_num
        Check_num = rand_str
        message = "您的验证码是" + rand_str + "，10分钟内有效，请尽快填写"
        emailBox = []
        emailBox.append(email)
        response = {"state": False, "errmsg": ""}
        try:
            send_mail('校园食评', message, 'linzy0426@126.com', emailBox, fail_silently=False)
            response['state'] = True
            response['errmsg'] = email
        except Exception as e:
            response['errmsg'] = "发送失败，请检查邮箱地址"
        return HttpResponse(json.dumps(response))


@login_required
def submit_feedback(request):
    if request.method == 'POST':
        feedback = request.POST.get('feedback')
        with open('feedback.txt', 'a') as file:
            file.write(feedback + '\n')
            # 执行其他操作，将feedback存储到数据库或文件中
            return redirect('/')
    else:
        return HttpResponse('Invalid request method')


@login_required
def update_nickname(request):
    if request.method == 'POST':
        nickname = request.POST.get('nickname')
        username = request.user.username
        user_name = User.objects.get(username=username)
        user_name.first_name = nickname
        user_name.save()
        messages.success(request, '修改成功')
        return redirect('/my_homepage')
    else:
        return HttpResponse('Invalid request method')


@login_required
def update_contact(request):
    if request.method == 'POST':
        contact = request.POST.get('contact_change')
        username = request.user.username
        user_information = User_Info.objects.get(user_name=username)
        user_information.contact = contact
        user_information.save()
        messages.success(request, '修改成功')
        return redirect('/my_homepage')
    else:
        return HttpResponse('Invalid request method')


def update_school(request):
    if request.method == 'POST':
        school = request.POST.get('school_change')
        username = request.user.username
        user_information = User_Info.objects.get(user_name=username)
        user_information.school_name = school
        user_information.save()
        messages.success(request, '修改成功')
        return redirect('/my_homepage')
    else:
        return HttpResponse('Invalid request method')


@csrf_exempt
def cancel_collect(request):
    username = request.user.username
    if request.method == 'POST':
        store_id = request.POST.get('storeId')
        time = request.POST.get('time')
        user_favor = User_Fav.objects.filter(user_name=username, store_id=store_id)
        user_favor.delete()
        response_data = {'message': 'success'}
        return JsonResponse(response_data)
    else:
        response_data = {'message': 'fail'}
        return JsonResponse(response_data)


@csrf_exempt
def add_collect(request):
    username = request.user.username
    if request.method == 'POST':
        store_id = request.POST.get('storeId')
        print(store_id)
        time = request.POST.get('time')
        user_favor = User_Fav.objects.create(user_name=username, store_id=store_id, collect_time=time)
        print(store_id)
        user_favor.save()
        response_data = {'message': 'success'}
        return JsonResponse(response_data)
    else:
        response_data = {'message': 'fail'}
        return JsonResponse(response_data)


@csrf_exempt
def check_if_collected(request):
    username = request.user.username
    if request.method == 'POST':
        store_id = request.POST.get('storeId')
        # print(store_id)
        # print(username)
        time = request.POST.get('time')
        # print(time)
        new_username = request.POST.get('username')
        # print(new_username)
        if User_Fav.objects.filter(user_name=new_username, store_id=store_id).exists():
            response_data = {'message': 'success'}
            return JsonResponse(response_data)
        else:
            response_data = {'message': 'fail'}
            return JsonResponse(response_data)
    else:
        error_data = {'error': 'POST_FAIL'}
        return JsonResponse(error_data, status=400)


@login_required
def update_username(request):
    user_name = request.user.username
    print('4')
    print(user_name)
    print('4')
    user_used_name = user_name
    if request.method == 'POST':
        username_change = request.POST.get('username_change')
        if User.objects.exclude(username=user_name).filter(username=username_change).exists():
            response = HttpResponse(
                "<script>alert('用户名已存在，请选择其他用户名'); window.location.href='/my_homepage';</script>")
            return response
        else:
            my_user = User.objects.get(username=user_name)
            my_user.username = username_change
            my_user.save()
            user_post = Post.objects.filter(author=user_name)
            for user_pos in user_post:
                user_pos.username = username_change
                user_pos.save()
            user_comment = Comment.objects.filter(author=user_name)
            for user_com in user_comment:
                user_com.username = username_change
                user_com.save()
            print('3')
            print(user_name)
            print('3')
            my_info = User_Info.objects.get(user_name=user_used_name)
            my_info.user_name = username_change
            print(my_info.user_name)
            my_info.save()
            my_fav = User_Fav.objects.filter(user_name=user_name)
            for user_fav in my_fav:
                user_fav.username = username_change
                user_fav.save()
            return redirect('/my_homepage')
    else:
        return HttpResponse('Invalid Method!')


def check_user(request, user_name):
    global user_user_user
    if request.user.username == user_name:
        return redirect('/my_homepage')
    else:
        user_user_user = user_name
        print(user_name)
        return redirect('/others_homepage')
        # return redirect('/others_homepage/?other_user={ user_name }')


def others_homepage(request):
    # other_user = request.GET.get('other_user')
    global user_user_user
    nick_name = User.objects.get(username=user_user_user)
    nickname = nick_name.first_name
    user_info = User_Info.objects.get(user_name=user_user_user)
    user_posts = Post.objects.filter(author=user_user_user)
    user_favs = User_Fav.objects.filter(user_name=user_user_user)
    store_ids = user_favs.values_list('store_id', flat=True)
    user_fav_posts = Post.objects.filter(id__in=store_ids)
    user_comments = Comment.objects.filter(author=user_user_user)
    return render(request, "personal_hp2.html",
                  {'nickname': nickname, 'other_user': user_user_user, 'user_info': user_info, 'user_posts': user_posts,
                   'user_favs': user_favs, 'user_fav_posts': user_fav_posts,
                   'user_comments': user_comments})


def my_homepage(request):
    username = request.user.username
    first_name = request.user.first_name
    comments = Comment.objects.filter(author=username)
    posts = Post.objects.filter(author=username)
    email = request.user.email
    user_information = User_Info.objects.get(user_name=username)
    user_favs = User_Fav.objects.filter(user_name=username)
    contact = user_information.contact
    school = user_information.school_name
    register_date = user_information.register_date
    store_ids = user_favs.values_list('store_id', flat=True)
    user_fav_posts = Post.objects.filter(id__in=store_ids)
    return render(request, 'personal_hp.html',
                  {'first_name': first_name, 'comments': comments, 'username': username, 'email': email,
                   'contact': contact, 'school': school, 'user_favs': user_favs, 'register_date': register_date,
                   'user_info': user_information, 'user_fav_posts': user_fav_posts,
                   'posts': posts})


@login_required
def update_user_image(request):
    username = request.user.username
    user_info = User_Info.objects.get(user_name=username)
    if request.method == 'POST':
        image_form = UserImageForm(request.POST, request.FILES)
        if image_form.is_valid() and 'user_image' in request.FILES:
            if user_info.user_image:
                image_path = user_info.user_image.path
                if os.path.exists(image_path):
                    os.remove(image_path)
            image_form.save()
            user_info.user_image.delete()
            user_info.user_image = request.FILES['user_image']
            user_info.save()
            print(user_info.user_image)
            # 其他逻辑处理
    return redirect('/my_homepage')
