## 运行
https:
```
python manage.py runserver_plus --cert cert/certificate.crt  --key cert/private.key 0.0.0.0:443
```
或http：
```
python manage.py runserver 0.0.0.0:80 
```
前者需要安装依赖并申请证书(ZeroSSL可免费申请)：
```
pip install django-extensions
pip install django-werkzeug-debugger-runserver
pip install pyOpenSSL
```
后者需要把settings.py中与HTTPS重定向以及上述前两个模块的有关内容删除(在INSTALLED_APPS中)。