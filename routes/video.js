import express from 'express';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// File read variable
const videoDataPath = path.resolve('./data/videos.json');

// GET /videos and return 4 items from json
router.get('/', (req, res) => {
  // read data/videos.json
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

router.get('/:id', (req, res) => {
  const { id } = req.params;

  // read data/videos.json
  const videoData = JSON.parse(fs.readFileSync(videoDataPath));
  const video = videoData.find((video) => video.id === id);

  if (video) {
    res.json(video);
  } else {
    // if wrong id send 404 status
    res.status(404).json({ error: 'Video not found' });
  }
});

router.post('/', (req, res) => {
  const { title, description } = req.body;

  const videoData = JSON.parse(fs.readFileSync(videoDataPath));

  const newVideo = {
    id: uuidv4(),
    title: title || 'Hardcoded Title',
    description: description || 'Hardcoded description',
    channel: 'Timothy Austin',
    "image": "https://i.imgur.com/i6S8m7I.jpg",
    "description": "Traveling by train can be convenient, enjoyable and economical. You can minimize your risk of injury, illness, and theft by taking a few simple precautions. Before you travel, you should pack only the necessities. This will make your luggage easy to carry and store during your travels. You should always assume that the tap water on the train is not potable. Whenever it is possible, stock up on bottles of water to reduce the risk of dehydration. Remember, never accept food or drinks from strangers!",
    "views": "3,092,284",
    "likes": "75,985",
    "duration": "4:20",
    "video": "https://project-2-api.herokuapp.com/stream",
    "timestamp": 1632344461000,

  };

  // Add the new video to the videoData array
  videoData.push(newVideo);

  // Save the updated videoData to the JSON file
  fs.writeFileSync(videoDataPath, JSON.stringify(videoData));

  res.status(201).json(newVideo);
});


export default router;
