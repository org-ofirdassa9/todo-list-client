FROM node:18

WORKDIR /usr/src/app

COPY . .

ENV REACT_APP_API_BASE_URL='https://parligator-server.herokuapp.com:5000'

RUN npm install

RUN npm run build

CMD [ "npm", "start" ]