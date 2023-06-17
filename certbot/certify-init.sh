#!/bin/sh

# Waits for proxy to be available, then gets the first certificate

set -e

until nc -z proxy 80; do
  echo "Waiting for proxy..."
  sleep 5s & wait ${!}
done

echo "Getting certificate..."

openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt

openssl req -x509 -out localhost.crt -keyout localhost.key \
-newkey rsa:2048 -nodes -sha256 \
-subj '/CN=localhost' -extensions EXT -config <( \
printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")


# certbot certonly \
#   --webroot \
#   --webroot-path "/var/www/" \
#   -d "$DOMAIN" \
#   --email $EMAIL \
#   --rsa-key-size 4096 \
#   --agree-tos \
#   --noninteractive
