from django import forms
from .models import Post, Comment, User_Info

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'dining_methods', 'address', 'phone', 'rest_image']
        labels = {
            'dining_methods': '就餐方式',
            'title': '店名',
            'address': '地址',
            'phone': '电话',
            'rest_image': '上传图片',
        }

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['score', 'score_1', 'score_2', 'score_3', 'score_4', 'per_person_cost', 'content', 'image']
        labels = {
            'score': '总体评价',
            'score_1': '口味',
            'score_2': '环境',
            'score_3': '服务',
            'score_4': '性价比',
            'per_person_cost': '人均消费',
            'content': '评价',
        }

class UserImageForm(forms.ModelForm):
    class Meta:
        model = User_Info
        fields = ['user_image']