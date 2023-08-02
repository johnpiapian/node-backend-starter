FROM node:18-alpine

# create app directory and copy source code
WORKDIR /dev/backend
COPY . /dev/backend

# install dependencies and run production build
RUN npm install
CMD npm run start

# port
EXPOSE 3000