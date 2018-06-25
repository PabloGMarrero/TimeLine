FROM node:9-alpine

COPY package.json .
COPY yarn.lock .

RUN yarn install;  \ yarn global add serve 

COPY . .

RUN yarn build

ENV NODE_ENV=production
EXPOSE 3001
CMD serve -s build