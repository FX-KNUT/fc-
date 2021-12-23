# build image
FROM alpine:edge AS builder
COPY . /usr/fc-backend
WORKDIR /usr/fc-backend

ENV GOOS=linux
ENV GOARCH=amd64

# timezone setting & install go
RUN apk add --update go \
    && go build -v -o backend.exe main.go \
    && chmod +x backend.exe


# deploy image
FROM ubuntu:18.04
COPY --from=builder /usr/fc-backend/backend.exe /
WORKDIR /
USER root

ENV DEBCONF_NOWARNINGS yes 

# timezone setting & install go
RUN ln -sSf /usr/share/zoneinfo/Asia/Seoul /etc/localtime \
    && apt-get -y update \
    && apt-get -y upgrade \ 
    && dpkg --add-architecture i386 \ 
    && apt-get install -y wget gnupg golang-go software-properties-common \
    && wget -nc https://dl.winehq.org/wine-builds/winehq.key \
    && apt-key add winehq.key \
    && add-apt-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ bionic main' \
    && apt-get -y update \
    && apt-get install --install-recommends -y wine-staging-i386 wine-staging-amd64 wine-staging winehq-staging

EXPOSE 8096
ENTRYPOINT ["wine", "backend.exe"]
# ENTRYPOINT ["go", "run", "main.go"]