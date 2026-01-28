import * as markdownService from "../services/markdownService.js";
export const listFiles = (_req, res) => {
    try {
        const files = markdownService.getAllFilesWithContent();
        res.json(files);
    }
    catch (error) {
        res.status(500).json({ error: "Kunde inte läsa mappen" });
    }
};
