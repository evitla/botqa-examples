server {
  listen 443 ssl;
  server_name localhost;

  ssl_certificate /etc/nginx/certs/localhost.crt;
  ssl_certificate_key /etc/nginx/certs/localhost.key;

  add_header Strict-Transport-Security "max-age=31536000" always;

  location / {
    proxy_pass http://frontend:3000;
    
    include /etc/nginx/proxy_params;
  }
}
