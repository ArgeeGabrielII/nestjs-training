FROM node:20-alpine3.18

ARG PG_ENDPOINT
ENV PG_ENDPOINT=$PG_ENDPOINT

ARG PG_USERNAME
ENV PG_USERNAME=$PG_USERNAME

ARG PG_PASSWORD
ENV PG_PASSWORD=$PG_PASSWORD

ARG PG_DATABASE
ENV PG_DATABASE=$PG_DATABASE

WORKDIR /usr/app
COPY . .
RUN npm install @nestjs/cli
RUN npm install
RUN npm run build

EXPOSE 3000
CMD npm run start