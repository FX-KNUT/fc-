#!bin/bash

rm -f /etc/localtime
ln -s /usr/zoneinfo/Asia/Seoul /etc/localtime
yum update -y
yum upgrade -y
yum install -y docker git firewalld
systemctl enable docker
systemctl enable firewalld
systemctl start docker
systemctl start firewalld

firewall-cmd --permanent --add-port=80/tcp --zone=public
firewall-cmd --permanent --add-port=14260/tcp --zone=public
firewall-cmd --permanent --add-service=http --zone=public
firewall-cmd --reload

usermod -aG docker ec2-user