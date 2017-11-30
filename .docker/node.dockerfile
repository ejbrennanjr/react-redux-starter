FROM aws-node

RUN mkdir -p /var/www 

WORKDIR /var/www

COPY package.json .

RUN npm install

VOLUME ["/var/www", "/var/www/node_modules"]

EXPOSE 3000

CMD ["nodemon", "-L", "/var/www"]