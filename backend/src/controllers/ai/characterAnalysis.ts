import { Request, Response } from "express";
import { Get, Post } from "../../decorators/routeDecorators.js";
import {
  abGenerateCharacterAnalysis,
  abGetCharacterAnalysis,
} from "../../services/aiServices.js";
import { controllerError } from "../../utils/aiUtils.js";

export default class AICharAnalysisController {
  @Post("")
  async generateAnalysis(req: Request, res: Response): Promise<void> {
    try {
      const data = await abGenerateCharacterAnalysis();
      res.json({ success: true, data });
    } catch (error) {
      controllerError(res, error, "Generate Character Analysis");
    }
  }

  @Get("")
  async getAnalysis(req: Request, res: Response): Promise<void> {
    try {
      const data = await abGetCharacterAnalysis();
      res.json({ success: true, data });
    } catch (error) {
      controllerError(res, error, "Get Character Analysis");
    }
  }
}
