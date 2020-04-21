FROM node:10

# Create app directory
WORKDIR /usr/src/app

ENV MONGOHOST=mongodb+srv://DevopsUser:DevopsPswd@todosstorage-i4enc.mongodb.net/test?retryWrites=true&w=majority

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]