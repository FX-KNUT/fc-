# build image
FROM node:16.13.0-alpine
COPY . /usr/fc-frontend
WORKDIR /usr/fc-frontend

# timezone setting and frontend library install and build
RUN  ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime\
    && npm install \
    && npm run build

WORKDIR /usr/fc-frontend/.next
EXPOSE 80
ENTRYPOINT ["npm", "start"]