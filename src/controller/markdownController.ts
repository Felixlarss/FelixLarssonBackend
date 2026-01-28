import { Request, Response } from "express";
import * as markdownService from "../services/markdownService.js";

export const listFiles = (_req: Request, res: Response) => {
  try {
    const files = markdownService.getAllFilesWithContent();
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: "Kunde inte läsa mappen" });
  }
};
