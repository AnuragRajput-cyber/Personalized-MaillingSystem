# Use Node.js base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy backend code
COPY server ./server
WORKDIR /app/server
RUN npm install

# Go back and copy frontend
WORKDIR /app
COPY client ./client
WORKDIR /app/client
RUN npm install
RUN npm run build

# Move build to server
RUN cp -r build ../server/build

# Set working dir to server
WORKDIR /app/server

# Expose port (same as server)
EXPOSE 3000

# Start backend
CMD ["node", "index.js"]
