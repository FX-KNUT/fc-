# build image
FROM golang:1.17 AS builder
COPY . /usr/fc-backend
WORKDIR /usr/fc-backend
RUN go build


# deploy image
FROM alpine:edge

# build file load from builder image
COPY --from=builder /usr/fc-backend /usr/fc-backend
WORKDIR /usr/fc-backend

# timezone setting & install go
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime \
    && apk add --update go=1.17.3-r0
EXPOSE 8080
ENTRYPOINT ["backend.exe"]