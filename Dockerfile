#stage 1
FROM node:latest as node
WORKDIR /app
# Copy the dist external folder into /app directory
COPY /dist ./dist
# Rename the configuration file
RUN mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak
# Copy the nginx configuration file to the nginx folder
COPY nginx.conf /etc/nginx/nginx.conf

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/champions /usr/share/nginx/html


