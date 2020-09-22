FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm build --prod
FROM nginx:apline
COPY . /usr/share/nginx/html
CMD ng serve --host 0.0.0.0 --port 3000