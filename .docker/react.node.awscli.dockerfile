FROM node-awscli

RUN mkdir -p /var/www 

WORKDIR /var/www

COPY package.json .

RUN npm install

VOLUME ["/var/www", "/var/www/node_modules"]

EXPOSE 3000

CMD ["npm", "start"]

# Build
# docker build -f .docker/react.node.awscli.dockerfile -t react-node-awscli .

# Run
# docker run -p 3000:3000 -v $(PWD):/var/www react-node-awscli