#stage 1
FROM node:latest as node
WORKDIR /app
COPY /dist ./dist
RUN npm i http-server -g
RUN http-server /app/dist/champions -p 80
# RUN npm run build --prod

#stage 2
# FROM nginx:alpine
# COPY --from=node /app/dist/champions /usr/share/nginx/html


