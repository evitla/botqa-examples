#!/bin/bash

set -e

echo "Checking for dhparams.pem"
if [ ! -f "/var/proxy/ssl-dhparams.pem" ]; then
  echo "dhparams.pem does not exist - creating it"
  openssl dhparam -out /var/proxy/ssl-dhparams.pem 2048
fi

echo "Checking for localhost.crt"
if [ ! -f "/etc/nginx/certs/localhost.crt" ]; then
  echo "No SSL cert, enabling HTTP only..."
  envsubst < /etc/nginx/default.conf.tpl > /etc/nginx/conf.d/default.conf
else
  echo "SSL cert exists, enabling HTTPS..."
  envsubst < /etc/nginx/default-ssl.conf.tpl > /etc/nginx/conf.d/default.conf
fi

nginx-debug -g 'daemon off;'
