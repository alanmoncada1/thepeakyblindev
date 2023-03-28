FROM nginx:1.19.2-alpine

WORKDIR /app
ARG ENV
COPY . .

RUN apk add --update nodejs npm nginx\
	&& npm install -g gatsby-cli \
	&& npm run build \
	&& cp -R public/. /usr/share/nginx/html \
	&& rm /etc/nginx/conf.d/default.conf \
	&& mkdir /etc/nginx/templates \
	&& cp nginx/nginx.conf /etc/nginx/templates/nginx.conf.template

EXPOSE $PORT
CMD ["nginx", "-g", "daemon off;"]
