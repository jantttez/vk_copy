#!/bin/bash


#first message after sh push.sh this is ur commit message
MESSAGE="$1"
DATE=$(date)

if [ -z "$MESSAGE" ]; then 
  echo "starting push to remote repo with auto message..."
  git add .
  git commit -m "$DATE"
  git push origin main 
  echo "Pushing complete success"
else
  echo "starting push to remote repo with custom message..."
  git add .
  git commit -m "$MESSAGE"
  git push origin main 
  echo "Pushing complete success"
fi