#!/bin/bash

# dockerhub login
bash /var/jenkins_home/fc-login.sh

# backend and frontend docker container image build
docker build --tag 2mukee/fc-backend:1.0 ./backend
docker build --tag 2mukee/fc-frontend:1.0 ./frontend
docker build --tag 2mukee/fc-build-server:1.0 ./build_server

# upload to docker registry
docker push 2mukee/fc-backend:1.0
docker push 2mukee/fc-frontend:1.0
docker push 2mukee/fc-build-server:1.0