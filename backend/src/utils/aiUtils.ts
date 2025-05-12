import axios from "axios";
import { Response } from "express";
import env from "../config/env.js";

// Global axios ai-backend config
export const axiosAB = axios.create({
  baseURL: env.AI_API_URL as string,
});

// Controller Error Func
export const ctrlerError = function (
  response: Response,
  error: any,
  message: string,
  statusCode: number = 500
) {
  return response.status(statusCode).json({
    success: false,
    error: `Failed to fetch from AI backend - ${message}`,
    errorMessage: error.message,
  });
};
