import axios from "axios";
import env from "../config/envConfig.js";

// Global axios ai-backend config
export const axiosAB = axios.create({
  baseURL: env.AI_API_URL,
});

// Controller Error Func
export const ctrlerError = function (
  response,
  error,
  message,
  statusCode = 500
) {
  return response.status(statusCode).json({
    success: false,
    error: `Failed to fetch from AI backend - ${message}`,
    errorMessage: error.message,
  });
};
