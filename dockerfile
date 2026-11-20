FROM nginx:alpine
COPY . /usr/share/nginx/html/
RUN if [ -d /usr/share/nginx/html/images ]; then \
      find /usr/share/nginx/html/images -maxdepth 1 -type f -name "*.JPG" -exec sh -c 'mv "$1" "${1%.JPG}.jpg"' _ {} \; ; \
    fi
EXPOSE 8080
