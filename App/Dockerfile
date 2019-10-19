FROM alpine
RUN apk add nodejs yarn
ADD package.json /app/
WORKDIR /app
RUN yarn install
ADD index.js /app/
EXPOSE 8080
CMD yarn start
