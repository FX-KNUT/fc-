# build image
FROM golang:1.17 AS builder
COPY . /usr/fc-backend
WORKDIR /usr/fc-backend
RUN go build


# deploy image
FROM alpine:edge

RUN mkdir /usr/fc-backend
WORKDIR /usr/fc-backend

# build file load from builder image
COPY --from=builder /usr/fc-backend/backend.exe /usr/fc-backend

# timezone setting & install go
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime \
    && apk add --update go wine \
    && chmod +x /usr/fc-backend/backend.exe
EXPOSE 8080
ENTRYPOINT ["wine", "/usr/fc-backend/backend.exe"]