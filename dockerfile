FROM node:20-alpine3.18 as base
WORKDIR /usr/app
COPY . .
RUN npm install @nestjs/cli
RUN npm install
RUN npm run build

FROM node:20-alpine3.18
WORKDIR /usr/app
RUN npm install @nestjs/cli
COPY --from=base /usr/app/dist /usr/app
COPY --from=base /usr/app/package.json /usr/app
RUN npm install
EXPOSE 3000
CMD [ "npm","run","start:prod" ]