FROM node:latest as node
RUN mkdir -p /app
WORKDIR /app
ADD . /app
COPY . .
RUN npm install
RUN npm build --prod
FROM nginx:1.17.1-alpine
COPY .  /usr/share/nginx/html
EXPOSE 5000