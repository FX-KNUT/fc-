# build image
FROM alpine:edge
COPY . /usr/fc-backend
WORKDIR /usr/fc-backend

# timezone setting & install go
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime \
    && apk add --update go \
    && chmod +x backend.exe
EXPOSE 8096
ENTRYPOINT ["go","run","main.go"]