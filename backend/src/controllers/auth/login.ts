import { Request, Response } from "express";
import { Get } from "../../decorators/routeDecorators.js";

export default class AuthLoginController {
  @Get("/login")
  login(req: Request, res: Response): void {
    res.json({ message: "Login endpoint" });
  }
}
