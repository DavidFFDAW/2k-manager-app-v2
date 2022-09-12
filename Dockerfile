#stage 1
FROM node:latest as node
WORKDIR /app
COPY /dist ./dist
# RUN npm ci --silent
# RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/champions /usr/share/nginx/html


