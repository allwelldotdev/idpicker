import {
  abReadRoot,
  abGenerateCharacterAnalysis,
  abGetCharacterAnalysis,
  abCareerRecommendations,
  abCareerRoadmap,
  abReportsShort,
  abReportsFull,
} from "../services/aiService.js";
import { ctrlerError } from "../utils/aiUtils.js";
import {Request, Response} from 'express';

// AI Read Root
export const aiReadRoot = async (req: Request, res: Response) => {
  try {
    const data = await abReadRoot();
    res.json({ success: true, data });
  } catch (error) {
    ctrlerError(res, error, "Read Root");
  }
};

// Character Analysis Controllers
export const generateCharacterAnalysis = async (req: Request, res: Response) => {
  try {
    const data = await abGenerateCharacterAnalysis();
    res.json({ success: true, data });
  } catch (error) {
    ctrlerError(res, error, "Generate Character Analysis");
  }
};

export const getCharacterAnalysis = async (req: Request, res: Response) => {
  try {
    const data = await abGetCharacterAnalysis();
    res.json({ success: true, data });
  } catch (error) {
    ctrlerError(res, error, "Get Character Analysis");
  }
};

// Career Recommendations Controllers
export const getCareerRecommendations = async (req: Request, res: Response) => {
  try {
    const data = await abCareerRecommendations();
    res.json({ success: true, data });
  } catch (error) {
    ctrlerError(res, error, "Get Career Recommendations");
  }
};

export const getCareerRoadmap = async (req: Request, res: Response) => {
  try {
    const data = await abCareerRoadmap();
    res.json({ success: true, data });
  } catch (error) {
    ctrlerError(res, error, "Get Career Roadmap");
  }
};

// Report Generation Controllers
export const getReportsShort = async (req: Request, res: Response) => {
  try {
    const data = await abReportsShort();
    res.json({ success: true, data });
  } catch (error) {
    ctrlerError(res, error, "Get Reports: Short");
  }
};

export const getReportsFull = async (req: Request, res: Response) => {
  try {
    const data = await abReportsFull();
    res.json({ success: true, data });
  } catch (error) {
    ctrlerError(res, error, "Get Reports: Full");
  }
};
