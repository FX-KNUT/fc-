#!/bin/bash

# docker stack init (docker swarm)
docker stack deploy -c /home/ec2-user/fc-jenkins/docker-compose.yml fc-stack