FROM node:lts-alpine3.23

WORKDIR /cellar-app

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "start"]