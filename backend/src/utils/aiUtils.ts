import axios from "axios";
import { Response } from "express";

import env from "../config/env.js";

// Global axios ai-backend config
export const axiosAB = axios.create({
  baseURL: env.AI_API_URL as string,
});

// Controller Error Func
export const controllerError = function (
  response: Response,
  error: any,
  message: string,
  statusCode: number = 500
) {
  console.log("Error calling AI Backend:", error); // Log error on server side

  if (
    error instanceof Error &&
    error.message.startsWith("ai-backend server unreachable")
  ) {
    response.status(502).json({
      success: false,
      message: "AI service is currently unreachable. Please try again later.",
      errorMessage: error.message,
    });
  } else {
    response.status(statusCode).json({
      success: false,
      message: `An internal server error occurred while processing your request | Failed to fetch from AI backend - ${message}`,
      errorMessage: error.message,
    });
  }
};
