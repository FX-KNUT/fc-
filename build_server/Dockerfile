# fc Build Server Container Image
FROM jenkins/jenkins
LABEL maintainer = tlgns7386@gmail.com
LABEL version = 1.0
ENV DEBCONF_NOWARNINGS yes 
USER root

# TimeZone Setting
# Docker install
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime \
    && apt-get update \
    && apt-get install -y ca-certificates curl gnupg lsb-release \
    && curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
    $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null \
    && apt-get update -y \
    && apt-get install -y docker-ce docker-ce-cli containerd.io systemctl \
    && usermod -aG docker root

# should create fc-login.sh before container build
COPY fc-login.sh /usr

# Jenkins Option Save
VOLUME /home/ec2-user/jenkins_home:/var/jenkins_home