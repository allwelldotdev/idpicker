FROM node:22.15.0-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

# strictly not needed because mounting local dev volume in docker compose 'volume'
COPY . .

# build TS first to avoid build and serve issues caused by 'tsc -w' and 'nodemon' collision via 'concurrently'
RUN npm run build

# for production because docker compose 'command' overrides this
CMD ["node", "dist/server.js"]