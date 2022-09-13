#stage 1
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY /dist/champions /usr/share/nginx/html/

#stage 2
# FROM nginx:alpine
# COPY --from=node /app/nginx.conf /etc/nginx/nginx.conf
# COPY --from=node /app/dist/champions /usr/share/nginx/html


