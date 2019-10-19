FROM alpine as builder
RUN apk add nodejs-npm yarn
RUN mkdir /server
ADD Server/package.json /server/package.json
ADD Server/yarn.lock /server/yarn.lock
WORKDIR /server
RUN yarn install --frozen-lockfile
ADD Server/index.ts /server/index.ts
RUN yarn run build

RUN mkdir /client
ADD Client/package.json /client/package.json
ADD Client/yarn.lock /client/yarn.lock
WORKDIR /client
RUN yarn install --frozen-lockfile
ADD Client/ /client
RUN yarn run build

FROM alpine 
RUN apk add nodejs
COPY --from=builder /server/dist/index.js /app/index.js
COPY --from=builder /client/dist/ /app/public/
WORKDIR /app
EXPOSE 8080 8081
CMD node index.js