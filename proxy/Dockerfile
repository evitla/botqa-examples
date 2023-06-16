FROM nginx:1.23.0-alpine

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD [ "nginx-debug", "-g", "daemon off;" ]
