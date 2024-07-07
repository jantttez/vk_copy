FROM node:20.15.0-bullseye

RUN npm install -g npm@latest --force && npm install --global yarn --force

WORKDIR /app

COPY . /app

RUN yarn

EXPOSE 5173


CMD [ "yarn", "dev", "--host", "0.0.0.0", "--port", "8000" ]

