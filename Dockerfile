FROM node:16-alpine

ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
WORKDIR /app
RUN npm install
CMD ["npm", "run", "demo"]
