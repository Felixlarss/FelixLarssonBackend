import { Router } from "express";
import { listFiles } from "../controller/markdownController.js";

const router = Router();

router.get("/files", listFiles);

export default router;
