# Database Server
FROM mysql:8.0.27

# Timezone setting
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime

# 데이터 영구 저장을 위한 디렉터리 설정
VOLUME /home/fc/data:/var/lib/mysql