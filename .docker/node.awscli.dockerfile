FROM aws-cli

# commands needed to install nodejs and npm
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - && \
    apt-get update && \
    apt-get install -y nodejs

# utility needed to monitor and restart node processes
RUN npm install -g nodemon