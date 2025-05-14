import { Request, Response } from "express";
import { Get } from "../../decorators/routeDecorators.js";
import { abGenerate, abReadRoot } from "../../services/aiServices.js";
import { controllerError } from "../../utils/aiUtils.js";

export default class AIRootController {
  @Get("")
  async getRoot(req: Request, res: Response): Promise<void> {
    try {
      const data = await abReadRoot();
      res.json({ success: true, data });
    } catch (error: any) {
      controllerError(res, error, "Read Root");
    }
  }

  @Get("/generate")
  async generate(req: Request, res: Response): Promise<void> {
    try {
      const data = await abGenerate(req.body);
      res.json({ success: true, data });
    } catch (error: any) {
      controllerError(res, error, "Root Generate");
    }
  }
}
