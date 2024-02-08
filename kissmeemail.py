# -*- coding: utf-8 -*-
"""
Created on Thu Feb  8 22:12:18 2024

@author: summerwu
"""
from flask import Flask, request, jsonify
from flask_mail import Mail, Message
import os

app = Flask(__name__)

# 从环境变量中读取敏感信息
MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')

# 配置邮件发送参数
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = MAIL_USERNAME
app.config['MAIL_PASSWORD'] = MAIL_PASSWORD

mail = Mail(app)

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.json

    name = data.get('name')
    email = data.get('email')

    if not name or not email:
        return jsonify({'error': '请填写姓名和邮箱'}), 400

    # 简单的邮箱格式验证
    if '@' not in email or '.' not in email:
        return jsonify({'error': '邮箱格式不正确'}), 400

    # 创建邮件消息对象
    msg = Message('填写完毕！', sender=MAIL_USERNAME, recipients=['summerwu0624@gmail.com'])
    msg.body = f'姓名: {name}, 电子邮件: {email}'

    # 发送邮件
    try:
        mail.send(msg)
        return jsonify({'message': '电子邮件已发送到 summerwu0624@gmail.com'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
