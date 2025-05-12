import "dotenv/config"; // Load .env file

const env = {
  APP_PORT: parseInt(process.env.APP_PORT),
  AI_API_URL: process.env.AI_API_URL, // FastAPI container on Docker network
};

export default env;
