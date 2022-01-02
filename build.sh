#!/bin/bash

# dockerhub login
# bash /usr/fc-login.sh
bash /var/lib/jenkins/workspace/mh-login.sh

# backend and frontend docker container image build
docker build --tag 2mukee/fc-backend:1.0 ./backend
docker build --tag 2mukee/fc-frontend:1.0 ./frontend

# upload to docker registry
docker push 2mukee/fc-backend:1.0
docker push 2mukee/fc-frontend:1.0