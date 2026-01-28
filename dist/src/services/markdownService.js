import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const POSTS_PATH = path.join(__dirname, "../../media/markdown");
export const getAllFilesWithContent = () => {
    const files = fs
        .readdirSync(POSTS_PATH)
        .filter((file) => file.endsWith(".md"));
    return files.map((fileName) => {
        const filePath = path.join(POSTS_PATH, fileName);
        const content = fs.readFileSync(filePath, "utf8"); // Läser filens text
        const rawName = fileName.replace(".md", "");
        return {
            originalId: rawName,
            content: content, // Här skickar vi med hela markdown-strängen
        };
    });
};
