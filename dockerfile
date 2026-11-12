FROM nginx:alpine
COPY . /usr/share/nginx/html
RUN find /usr/share/nginx/html -type f ( -name ".JPG" -o -name ".JPEG" ) -exec sh -c 'for f; do mv "$f" "${f%.JPG}.jpg"; done' _ {} +