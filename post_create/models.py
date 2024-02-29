# from django.db import models
#
# class Post(models.Model):
#
#     def __str__(self):
#     title = models.CharField(max_length=200)
#     content = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)
#     author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
#         return self.title
from django.db import models
from django.utils import timezone


class Post(models.Model):
    title = models.CharField(max_length=200)
    school_name = models.CharField(max_length=200, null=True, blank=True)
    rest_remark = models.TextField(null=True, blank=True)
    author = models.CharField(max_length=255, null=True, blank=True)
    nickname = models.CharField(max_length=255, null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True)  # 设置默认为空字符串
    phone = models.CharField(max_length=15, default='')  # 设置默认为空字符串
    dining_methods = models.CharField(max_length=15, null=True, blank=True)
    nearby_schools = models.CharField(max_length=20, default='')  # 设置默认为空字符串
    rest_image = models.ImageField(upload_to='restaurant_images/', null=True, blank=True)
    avg_cost = models.DecimalField(max_digits=5, decimal_places=1, null=True, blank=True)
    avg_score1 = models.FloatField(null=True, blank=True)
    avg_score2 = models.FloatField(null=True, blank=True)
    avg_score3 = models.FloatField(null=True, blank=True)
    avg_score4 = models.FloatField(null=True, blank=True)
    avg_score = models.FloatField(null=True, blank=True)
    last_comment_time = models.DateTimeField(null=True, blank=True)
    high_count = models.PositiveIntegerField(default=0)
    mid_count = models.PositiveIntegerField(default=0)
    low_count = models.PositiveIntegerField(default=0)
    comment_count = models.PositiveIntegerField(default=0)
    most_recom = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self):
        return self.title

    def has_image(self):
        return bool(self.rest_image)

    def get_image_url(self):
        if self.has_image():
            return self.rest_image.url
        return None


class User_Info(models.Model):
    user_name = models.CharField(max_length=255, blank=True, primary_key=True)
    contact = models.CharField(max_length=30, default='请编辑您的手机号')
    school_name = models.CharField(max_length=100, default='请编辑您的学校')
    register_date = models.DateTimeField(null=True, blank=True)
    user_image = models.ImageField(upload_to='user_images/', null=True, blank=True,
                                   default='./user_images/default_user_image.jpg')

    def has_image(self):
        return bool(self.user_image)

    def get_image_url(self):
        if self.has_image():
            return self.user_image.url
        return None


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    content = models.TextField()
    author = models.CharField(max_length=255, null=True, blank=True)
    # author_img= models.ImageField(upload_to='user_images/', null=True, blank=True,default='./user_images/default_user_image.jpg')
    nickname = models.CharField(max_length=255, null=True, blank=True)
    per_person_cost = models.DecimalField(max_digits=5, decimal_places=1, null=True, blank=True)
    score_1 = models.DecimalField(max_digits=2, decimal_places=1, null=True, blank=True)
    score_2 = models.DecimalField(max_digits=2, decimal_places=1, null=True, blank=True)
    score_3 = models.DecimalField(max_digits=2, decimal_places=1, null=True, blank=True)
    score_4 = models.DecimalField(max_digits=2, decimal_places=1, null=True, blank=True)
    score = models.DecimalField(max_digits=2, decimal_places=1, null=True, blank=True)
    comment_time = models.DateTimeField(null=True, blank=True)
    recommend = models.CharField(max_length=20, null=True, blank=True)
    like_count = models.DecimalField(max_digits=8, decimal_places=0, null=True, blank=True)
    image = models.ImageField(upload_to='comment_images/', null=True, blank=True)

    def has_image(self):
        return bool(self.image)

    def get_image_url(self):
        if self.has_image():
            return self.image.url
        return None


class School(models.Model):
    name = models.CharField(max_length=100, primary_key=True)
    coordinates = models.CharField(max_length=100)
    post_count = models.IntegerField()


class User_Fav(models.Model):
    user_name = models.CharField(max_length=255, blank=True)
    store_id = models.PositiveIntegerField(default=0)  # 当前帖子的店家id
    collect_time = models.DateTimeField(null=True, blank=True)
