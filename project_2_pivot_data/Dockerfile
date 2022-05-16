FROM node:16

WORKDIR /app
COPY . .
RUN npm install -g nodemon
RUN npm install -g sequelize-cli
RUN npm install
EXPOSE 5000
ENTRYPOINT ["nodemon", "index.js"]