FROM alpine as builder
RUN apk add nodejs-npm yarn
RUN mkdir /src
ADD package.json /src/package.json
ADD yarn.lock /src/yarn.lock
WORKDIR /src
RUN yarn install --frozen-lockfile
ADD index.ts /src/index.ts
RUN yarn run build

FROM alpine 
RUN apk add nodejs
COPY --from=builder /src/dist/index.js /app/index.js
WORKDIR /app
EXPOSE 8080 8081
CMD node index.js