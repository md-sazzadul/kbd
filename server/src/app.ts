import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { errorHandler } from "./middlewares/error.middleware";
import authRoutes from "./routes/auth.routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(helmet());
app.use(morgan("dev"));
app.use(compression());

app.use("/api/v1/auth", authRoutes);

app.get("/health", (_req, res) => {
  res.json({ success: true, message: "API is running" });
});

app.use(errorHandler);

export default app;
