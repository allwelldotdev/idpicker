import express from "express";
import { login, register } from "../controllers/authController.js";

const router = express.Router();
const authRouter = express.Router();

authRouter.get("/login", login);
authRouter.post("/register", register);

router.use("/auth", authRouter);

export default router;
