import { Request, Response } from "express";
import { Get } from "../../decorators/routeDecorators.js";
import {
  abCareerRecommendations,
  abCareerRoadmap,
} from "../../services/aiServices.js";
import { controllerError } from "../../utils/aiUtils.js";

export default class AICareerRecController {
  @Get("")
  async getCarerrRecommendations(req: Request, res: Response): Promise<void> {
    try {
      const data = await abCareerRecommendations();
      res.json({ success: true, data });
    } catch (error) {
      controllerError(res, error, "Get Career Recommendations");
    }
  }

  @Get("/roadmap")
  async getCareerRoadmap(req: Request, res: Response): Promise<void> {
    try {
      const data = await abCareerRoadmap();
      res.json({ success: true, data });
    } catch (error) {
      controllerError(res, error, "Get Career Roadmap");
    }
  }
}
