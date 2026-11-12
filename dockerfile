FROM nginx:alpine
COPY . /usr/share/nginx/html
RUN cd /usr/share/nginx/html/images && for f in *.JPG; do [ -e "$f" ] && mv "$f" "${f%.JPG}.jpg"; done