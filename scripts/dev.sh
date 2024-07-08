#!/bin/bash

docker build -t app:dev . -f Dockerfile.dev

docker run -p 8090:8000 -v "/home/jantttez/Documents/projects/vkcopy:/app" -d --name dev --rm app:dev 

echo "open browser on 0.0.0.0:8090"

sleep 36000

docker rm dev --force 

docker rmi app:dev --force 

docker image prune 


