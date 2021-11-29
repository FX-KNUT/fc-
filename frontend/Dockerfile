# build image
FROM node:16.13.0 AS builder
COPY . /usr/fc-frontend

# frontend library install and build
WORKDIR /usr/fc-frontend
RUN npm install && npm run build


# deploy image
FROM alpine:edge

# build file load from builder image
COPY --from=builder /usr/fc-fronted/dist /usr/fc-frontend
WORKDIR /usr/fc-frontend

# timezone setting & install nodejs and npm
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime \
    && apk add --update nodejs=16.13.0-r0 \
    && apk add --update npm=8.1.3-r0
EXPOSE 80
ENTRYPOINT ["npm", "start"]