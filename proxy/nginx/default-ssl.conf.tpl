server {
  listen 80;
  server_name _;

  location /.well-known/acme-challenge/ {
    root /var/www/;
  }

  location / {
    return 301 https://$host$request_uri;
  }
}

server {
  listen 443 ssl;
  server_name _;

  ssl_certificate /etc/nginx/certs/localhost.crt;
  ssl_certificate_key /etc/nginx/certs/localhost.key;

  include /etc/nginx/options-ssl-nginx.conf;

  ssl_dhparam /var/proxy/ssl-dhparams.pem;

  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

  location / {
    proxy_pass http://nextjs:3000;
    
    proxy_http_version 1.1;
    include /etc/nginx/proxy_params;
  }
}
