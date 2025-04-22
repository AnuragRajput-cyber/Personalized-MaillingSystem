# 1. Use Node base image
FROM node:18

# 2. Set working directory
WORKDIR /app

# 3. Copy backend (server)
COPY server ./server
WORKDIR /app/server
RUN npm install

# 4. Copy frontend (client)
WORKDIR /app
COPY client ./client
WORKDIR /app/client
RUN npm install
RUN npm run build

# 5. Move React build into server
RUN cp -r build ../server/build

# 6. Set final working dir
WORKDIR /app/server

# 7. Expose port
EXPOSE 3000

# 8. Start backend (which serves frontend too)
CMD ["node", "index.js"]
