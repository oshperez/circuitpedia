import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import componentsController from "../controllers/components.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", componentsController.getComponents);

router.get("/:componentId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/component.html"));
});

export default router;
