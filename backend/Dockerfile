# build image
FROM alpine:edge
COPY . /usr/fc-backend
WORKDIR /usr/fc-backend

# timezone setting & install go
RUN ln -sSf /usr/share/zoneinfo/Asia/eoul /etc/localtime \
    && go build \
    && apk add --update go wine\
    && chmod +x backend.exe
EXPOSE 8096
ENTRYPOINT ["wine", "/usr/fc-backend/backend.exe"]