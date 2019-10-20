FROM alpine as builder 
RUN apk add nodejs yarn
ADD package.json /app/
WORKDIR /app
RUN yarn install
ADD index.js /app/
RUN yarn run build

FROM alpine
RUN apk add nodejs
COPY --from=builder /app/dist/index.js /app/index.js
WORKDIR /app
EXPOSE 8080
CMD node index.js
