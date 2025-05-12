import express, {NextFunction, Request, Response} from "express";
import env from "./config/env.js";

// Importing Routes
import aiRoutes from "./routes/aiRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(express.json());

// Middleware to mount all routes under /api/**
app.use(
  "/api",
  (req: Request, res: Response, next: NextFunction): void => {
    // Handle /api/ (home route)
    // if (req.path === "/" || req.path === "")
    //   return res.json({ message: "IDPicker APP Server is running!" });
    next(); // Pass onto next middleware (e.g., aiRoutes)
  },
  [
    // Mount routes to inherit from /api
    aiRoutes, // '/api/ai'
    authRoutes, // '/api/auth'
  ]
);

// Start server
app.listen(env.APP_PORT, () => {
  console.log(`Server is running on port ${env.APP_PORT}`);
});
