"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from post_create import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),

    path('<str:school>/index/<str:sort>', views.index, name='index'),
    # path('index/', views.index),
    path('<str:school>/create_post/', views.create_post, name='create_post'),
    path('<int:restaurant_id>/restaurant/', views.restaurant_detail, name='restaurant_detail'),
    path('<int:restaurant_id>/create_comment/', views.create_comment, name='create_comment'),
    path('login/', views.login),  # 用于打开登录页面
    path('register/', views.register),  # 用于打开注册页面
    path('', views.main),  # 用于打开主界面
    path('register/save', views.save),  # 输入用户名密码后交给后台save函数处理
    path('login/query', views.query),  # 输入用户名密码后交给后台query函数处理
    path('logout/', views.my_logout),
    path('api/get_school_data/', views.get_school_data, name='get-school-data'),
    path('api/get_top_school_data/', views.get_top_school_data, name='get-top-school-data'),
    path('register/send_email/', views.reg_check),  # 发送验证码

    path('my_homepage/', views.my_homepage),

    path('others_homepage/', views.others_homepage),

    path('my_homepage/submit_feedback/', views.submit_feedback),

    path('my_homepage/update_nickname/', views.update_nickname),

    path('my_homepage/update_contact/', views.update_contact),

    path('my_homepage/update_school/', views.update_school),

    path('my_homepage/update_username/', views.update_username),
    path('<str:user_name>/check_user/', views.check_user, name='check_user'),


    path('my_homepage/cancel_collect/', views.cancel_collect),

    path('my_homepage/add_collect/', views.add_collect),

    path('my_homepage/check_if_collected/', views.check_if_collected),

    path('my_homepage/update_user_image/', views.update_user_image, name='update_user_image'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
