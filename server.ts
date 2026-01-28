import express from "express";
import cors from "cors";
import markdownRoute from "./src/routes/markdownRoute.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors());

app.use("/api", markdownRoute);

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
