FROM node:15.7.0-alpine3.10
WORKDIR /usr/app
ENV PORT=3000 CSV=routes.csv
COPY package.json .
RUN npm install --quiet
COPY . .