# ### STAGE 1: Build ###
# FROM node:12.7-alpine AS build
# WORKDIR /usr/src/app
# COPY package.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# ### STAGE 2: Run ###
# FROM nginx:1.17.1-alpine
# COPY --from=build /usr/src/app/dist/assignment-8-Kiranzigma /usr/share/nginx/html

# FROM node:12.11.1
# WORKDIR /app
# COPY package.json ./
# RUN npm install --no-progress --ignore-optional
# COPY . .
# EXPOSE 4200
# CMD ng serve --port 4200 --host 0.0.0.0

# Build project
FROM node:latest as node
WORKDIR /app

COPY . .
RUN npm install 

RUN npm run build

# Build runtime image
FROM nginx:alpine

COPY --from=node /app/dist/todoAngular /usr/share/nginx/html