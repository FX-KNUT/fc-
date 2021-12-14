# build image
FROM node:16.13.0 AS builder
COPY . /usr/fc-frontend

# frontend library install and build
WORKDIR /usr/fc-frontend
RUN npm install && npm run build


# deploy image
FROM alpine:edge

# build file load from builder image
COPY --from=builder /usr/fc-frontend /usr/fc-frontend
WORKDIR /usr/fc-frontend/.next

# timezone setting & install nodejs and npm
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime \
    && apk add --update nodejs \
    && apk add --update npm
EXPOSE 80
ENTRYPOINT ["npm", "start"]