FROM nginx:1.17.1-alpine
COPY . /usr/share/nginx/html
CMD ng serve --host 0.0.0.0 --port 3000