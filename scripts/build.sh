#!/bin/bash

SECOND_TO_TEST=60
PORT=8090

docker build -t app:extension . -f Dockerfile

docker run -p ${PORT}:8000 -d --name extension --rm app:extension


echo "Go to your web browseк and link to localhost:${PORT}"

echo "You have ${SECOND_TO_TEST} second to test"

sleep ${SECOND_TO_TEST}

docker stop extension

docker rmi app:extension --force

