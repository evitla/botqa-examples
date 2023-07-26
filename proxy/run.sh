#!/bin/bash

set -e

echo "Checking for localhost.crt"
if [ ! -f "/etc/nginx/certs/localhost.crt" ]; then
  echo "No SSL cert - creating it"
  
  openssl req -x509 -out /etc/nginx/certs/localhost.crt \
    -keyout /etc/nginx/certs/localhost.key \
    -newkey rsa:2048 -nodes -sha256 \
    -subj '/CN=localhost' -extensions EXT -config <( \
    printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
fi

envsubst < /etc/nginx/default.conf.tpl > /etc/nginx/conf.d/default.conf

nginx-debug -g 'daemon off;'
