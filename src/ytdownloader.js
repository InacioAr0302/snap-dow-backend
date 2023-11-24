import fs from "fs";
import ytdl from "ytdl-core";

export default function download(url) {
  ytdl(url).pipe(fs.createWriteStream("video.mp4"));
}
