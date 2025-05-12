import "dotenv/config"; // Load .env file

const env: Record<any, string|number> = {
  APP_PORT: parseInt(process.env.APP_PORT as string),
  AI_API_URL: process.env.AI_API_URL as string, // FastAPI container on Docker network
};

export default env;
