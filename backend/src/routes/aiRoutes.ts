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

const routerCareerRec = express.Router();
const routerCharAnalysis = express.Router();
const routerReportGen = express.Router();

// Get AI Home
router.get("/ai", aiReadRoot);

// Sub-routing: Character Analysis
routerCharAnalysis.post("", generateCharacterAnalysis);
routerCharAnalysis.get("", getCharacterAnalysis);

// Sub-routing: Career Recommendations
routerCareerRec.get("", getCareerRecommendations);
routerCareerRec.get("/roadmap", getCareerRoadmap);

// Sub-routing for Report Generation
routerReportGen.get("/short", getReportsShort);
routerReportGen.get("/full", getReportsFull);

router.use("/ai/character-analysis", routerCharAnalysis);
router.use("/ai/career-recommendations", routerCareerRec);
router.use("/ai/reports", routerReportGen);

export default router;
