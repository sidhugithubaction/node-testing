FROM node:20.14-alpine

LABEL Maintainer="abc@gmail.com"

COPY . .

RUN npm install

ENTRYPOINT npm          

CMD start
