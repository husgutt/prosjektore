##### Stage 1
FROM node:14.15.4 as node
LABEL author="Tore Sveaass"
WORKDIR /app
COPY ./prosjektore-app/package.json package.json
RUN npm install
COPY . .
RUN npm run build -- --prod

##### Stage 2
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node /app/dist/prosjektore-app /usr/share/nginx/html
COPY ./prosjektore-app/config/nginx.conf /etc/nginx/conf.d/default.conf
