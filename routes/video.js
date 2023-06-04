import express from 'express';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// File read variable
const videoDataPath = path.resolve('./data/videos.json');

// GET /videos and return 4 items from json
router.get('/', (req, res) => {
  const videoData = JSON.parse(fs.readFileSync(videoDataPath));

  const videos = videoData.map((video) => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
    };
  });

  // send response back
  res.json(videos);
});


export default router;
