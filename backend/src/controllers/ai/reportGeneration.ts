import { Request, Response } from "express";
import { Get } from "../../decorators/routeDecorators.js";
import { abReportsShort, abReportsFull } from "../../services/aiServices.js";
import { controllerError } from "../../utils/aiUtils.js";

export default class AIReportGenController {
  @Get("/short")
  async getShort(req: Request, res: Response): Promise<void> {
    try {
      const data = await abReportsShort();
      res.json({ success: true, data });
    } catch (error) {
      controllerError(res, error, "Get Reports: Short");
    }
  }

  @Get("/full")
  async getFull(req: Request, res: Response): Promise<void> {
    try {
      const data = await abReportsFull();
      res.json({ success: true, data });
    } catch (error) {
      controllerError(res, error, "Get Reports: Full");
    }
  }
}
