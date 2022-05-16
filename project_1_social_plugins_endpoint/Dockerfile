FROM node:16

WORKDIR /app
COPY . .
RUN npm install -g nodemon
RUN npm install
EXPOSE 4000
ENTRYPOINT ["nodemon", "index.js"]