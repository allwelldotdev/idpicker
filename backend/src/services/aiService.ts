/*
Services make HTTP API calls (requests) to FastAPI ai-backend ('ab' for short) API
*/

import { axiosAB } from "../utils/aiUtils.js";

// GET ai-backend '/'
export const abReadRoot = async () => {
  const response = await axiosAB.get("/");
  return response.data;
};

// Character Analysis Services
export const abGenerateCharacterAnalysis = async () => {
  const response = await axiosAB.post("/character-analysis");
  return response.data;
};

export const abGetCharacterAnalysis = async () => {
  const response = await axiosAB.get("/character-analysis");
  return response.data;
};

// Career Recommendations Services
export const abCareerRecommendations = async () => {
  const response = await axiosAB.get("/career-recommendations");
  return response.data;
};

export const abCareerRoadmap = async () => {
  const response = await axiosAB.get("/career-recommendations/roadmap");
  return response.data;
};

// Report Generation Services
export const abReportsShort = async () => {
  const response = await axiosAB.get("/reports/short");
  return response.data;
};

export const abReportsFull = async () => {
  const response = await axiosAB.get("/reports/full");
  return response.data;
};
