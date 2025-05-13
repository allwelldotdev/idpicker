import express from "express";
import RouteController from "../utils/RouteController.js";
import { RouteMetadataKey } from "../utils/metadata.js";
import AIRootController from "../controllers/ai/root.js";
import AICharAnalysisController from "../controllers/ai/characterAnalysis.js";
import AICareerRecController from "../controllers/ai/careerRecommendations.js";
import AIReportGenController from "../controllers/ai/reportGeneration.js";

const router = express.Router();

const routerAIRoot = express.Router();
const routerCharAnalysis = express.Router();
const routerCareerRec = express.Router();
const routerReportGen = express.Router();

const routeController = new RouteController({
  route: RouteMetadataKey,
});

// Sub-routing: AI Read Root
routeController.register(routerAIRoot, [AIRootController]);
routeController.register(routerCharAnalysis, [AICharAnalysisController]);
routeController.register(routerCareerRec, [AICareerRecController]);
routeController.register(routerReportGen, [AIReportGenController]);

router.use("/ai", routerAIRoot);
router.use("/ai/character-analysis", routerCharAnalysis);
router.use("/ai/career-recommendations", routerCareerRec);
router.use("/ai/reports", routerReportGen);

export default router;
