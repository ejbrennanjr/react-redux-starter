FROM node:latest

# COPY package.json /tmp

RUN cd /tmp && npm install

# RUN mkdir -p /var/www && cp -a /tmp/node_modules /var/www
RUN mkdir -p /var/www 

WORKDIR /var/www

#VOLUME ["/var/www", "/var/www/node_modules"]
VOLUME ["/var/www"]


# EXPOSE 3000

# CMD ["nodemon", "-L", "/var/www"]


# Build
# docker build -f node.dockerfile -t base-node .

# Run Template
# docker run -i -t -p 3000:3000 -v $(PWD):/var/www base-node <COMMAND HERE>
