# fc Build Server Container Image
FROM jenkins/jenkins
LABEL maintainer = tlgns7386@gmail.com
LABEL version = 1.0
USER root

# TimeZone Setting
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime

# should create fc-login.sh before container build
COPY ./fc-login.sh /var/jenkins_home/fc-login.sh

# Jenkins Option Save
VOLUME /home/ec2-user/jenkins_home:/var/jenkins_home
