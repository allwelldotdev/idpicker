import express from "express";
import {
  aiReadRoot,
  generateCharacterAnalysis,
  getCharacterAnalysis,
  getCareerRecommendations,
  getCareerRoadmap,
  getReportsShort,
  getReportsFull,
} from "../controllers/aiController.js";

const router = express.Router();

const careerRecommendationsRouter = express.Router();
const characterAnalysisRouter = express.Router();
const reportGenerationRouter = express.Router();

// Get AI Home
router.get("/ai", aiReadRoot);

// Sub-routing: Character Analysis
characterAnalysisRouter.post("", generateCharacterAnalysis);
characterAnalysisRouter.get("", getCharacterAnalysis);

// Sub-routing: Career Recommendations
careerRecommendationsRouter.get("", getCareerRecommendations);
careerRecommendationsRouter.get("/roadmap", getCareerRoadmap);

// Sub-routing for Report Generation
reportGenerationRouter.get("/short", getReportsShort);
reportGenerationRouter.get("/full", getReportsFull);

router.use("/ai/character-analysis", characterAnalysisRouter);
router.use("/ai/career-recommendations", careerRecommendationsRouter);
router.use("/ai/reports", reportGenerationRouter);

export default router;
