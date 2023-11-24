import express from "express";
import cors from "cors";
import download from "./ytdownloader.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/download", (req, res) => {
  download(req.body.videoUrl);
  console.log("fim");
  res.download("video.mp4");
});

app.listen(5000, "127.0.0.1");
