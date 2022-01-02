#!/bin/bash

# docker stack init (docker swarm)
docker stack deploy -c /var/lib/jenkins/workspace/fc/docker-compose.yml fc-stack