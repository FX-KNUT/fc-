#!/bin/bash

# dockerhub login
bash /home/ec2-user/jenkins/workspace/fc-login.sh

# backend and frontend docker container image build
docker build --tag 2mukee/fc-backend:1.0 ./backend
docker build --tag 2mukee/fc-frontend:1.0 ./frontend

# upload to docker registry
docker push 2mukee/fc-backend:1.0
docker push 2mukee/fc-frontend:1.0

# docker stack init (docker swarm)
docker stack deploy -c ./docker-compose.yml fc-stack