# build image
FROM alpine:edge
COPY . /usr/fc-backend
WORKDIR /usr/fc-backend

# timezone setting & install go
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime \
    && apk add --update go wine\
    && chmod +x backend.exe
EXPOSE 8096
ENTRYPOINT ["wine","backend.exe"]