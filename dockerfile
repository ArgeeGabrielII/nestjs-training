FROM node:20-alpine3.18

WORKDIR /usr/app
COPY . .
RUN npm install @nestjs/cli
RUN npm install
RUN npm run build

EXPOSE 3000
CMD [ "npm","run","start:prod" ]