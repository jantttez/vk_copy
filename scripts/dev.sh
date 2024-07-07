#!/bin/bash

docker build -t app:dev . -f Dockerfile.dev

docker run -p 8090:8000 -v "/home/jantttez/Documents/projects/vkcopy:/app"  --name dev --rm app:dev 

sleep 3600

docker rm dev --force 

docker rmi app:dev --force 

docker image prune

echo "open browser on 0.0.0.0:8090"
