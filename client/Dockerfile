FROM node:9.6.1

MAINTAINER boulbestho@eisti.eu

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app/

COPY . .

RUN npm install --silent 

CMD ["npm", "start"]
