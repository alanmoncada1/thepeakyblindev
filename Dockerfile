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

https://github.com/bitovi/github-actions-deploy-docker-to-ec2.git
https://github.com/alanmoncada1/thepeakyblindev.git