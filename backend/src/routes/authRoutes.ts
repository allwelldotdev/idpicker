import express from "express";
import RouteController from "../utils/RouteController.js";
import metadataKeys from "../utils/metadataKeys.js";
import AuthLoginController from "../controllers/auth/login.js";
import AuthRegisterController from "../controllers/auth/register.js";

const router = express.Router();
const authRouter = express.Router();

const routeController = new RouteController({
  route: metadataKeys.route,
});

routeController.register(authRouter, [
  AuthLoginController,
  AuthRegisterController,
]);

router.use("/auth", authRouter);

export default router;
