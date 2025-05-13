/*
Services make HTTP API calls (requests) to FastAPI ai-backend ('ab' for short) API
*/

import { axiosAB } from "../utils/aiUtils.js";

// GET ai-backend '/'
export const abReadRoot = async (): Promise<JSON> => {
  try {
    const response = await axiosAB.get("/");
    return response.data;
  } catch (err: any) {
    throw new Error(`ai-backend server unreachable | ${err.message}`);
  }
};

// Character Analysis Services
export const abGenerateCharacterAnalysis = async (): Promise<JSON> => {
  try {
    const response = await axiosAB.post("/character-analysis");
    return response.data;
  } catch (err: any) {
    throw new Error(`ai-backend server unreachable | ${err.message}`);
  }
};

export const abGetCharacterAnalysis = async (): Promise<JSON> => {
  try {
    const response = await axiosAB.get("/character-analysis");
    return response.data;
  } catch (err: any) {
    throw new Error(`ai-backend server unreachable | ${err.message}`);
  }
};

// Career Recommendations Services
export const abCareerRecommendations = async (): Promise<JSON> => {
  try {
    const response = await axiosAB.get("/career-recommendations");
    return response.data;
  } catch (err: any) {
    throw new Error(`ai-backend server unreachable | ${err.message}`);
  }
};

export const abCareerRoadmap = async (): Promise<JSON> => {
  try {
    const response = await axiosAB.get("/career-recommendations/roadmap");
    return response.data;
  } catch (err: any) {
    throw new Error(`ai-backend server unreachable | ${err.message}`);
  }
};

// Report Generation Services
export const abReportsShort = async (): Promise<JSON> => {
  try {
    const response = await axiosAB.get("/reports/short");
    return response.data;
  } catch (err: any) {
    throw new Error(`ai-backend server unreachable | ${err.message}`);
  }
};

export const abReportsFull = async (): Promise<JSON> => {
  try {
    const response = await axiosAB.get("/reports/full");
    return response.data;
  } catch (err: any) {
    throw new Error(`ai-backend server unreachable | ${err.message}`);
  }
};
