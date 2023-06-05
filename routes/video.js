import express from 'express';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// File read variable
const videoDataPath = path.resolve('./data/videos.json');

// getting /videos and return 4 items from json
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

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const videoData = JSON.parse(fs.readFileSync(videoDataPath));
  const video = videoData.find((v) => v.id === id);

  if (video) {
    res.json(video);
  } else {
    // status code on fail
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
    "channel": "a newchannel",
    "image": "http://localhost:8550/images/image9.jpeg",
    "views": "3,092,284",
    "likes": "75,985",
    "duration": "4:20",
    "video": "https://project-2-api.herokuapp.com/stream",
    "timestamp": Date.now(),
    "comments": [
       
    ]
    
  };

  // Add the new video to the videoData array
  videoData.push(newVideo);

  // Save the updated videoData to the JSON file in data/video.json
  fs.writeFileSync(videoDataPath, JSON.stringify(videoData));

  res.status(201).json({ id: newVideo.id }); // Return the new video's id
});


export default router;
