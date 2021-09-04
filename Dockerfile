FROM node:16.4.2-alpine

ARG                                                                                 \
    APP_ROOT=/usr/src/app/

WORKDIR ${APP_ROOT}

COPY .env tsconfig.json package.json src/ ${APP_ROOT}

RUN npm install

RUN npm run build

EXPOSE 5000

CMD node dist/index.js

HEALTHCHECK CMD curl --fail http://localhost:5000/ || exit 1
