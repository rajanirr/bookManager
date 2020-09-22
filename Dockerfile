FROM node:latest as node
COPY . .
RUN npm install
RUN npm build --prod
FROM nginx:1.17.1-alpine
COPY. /usr/share/nginx/html