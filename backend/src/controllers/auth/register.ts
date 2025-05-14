import { Request, Response } from "express";
import { Post } from "../../decorators/routeDecorators.js";

export default class AuthRegisterController {
  @Post("/register")
  register(req: Request, res: Response): void {
    res.json({ message: "Register endpoint" });
  }
}
