# Basic Dockerfile: Write a Dockerfile for a Node.js Express application that 
# installs dependencies and runs the server on port 3000.
# 2.DOCKER\1.Basic_Dockerfile\Dockerfile
# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to start the server
# CMD ["node", "index.js"]
CMD ["npm", "start"] 