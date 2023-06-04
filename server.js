import express from 'express';
import videoRoutes from './routes/video.js';
import bodyParser from 'body-parser';
import cors from 'cors';




const app = express();
const PORT = 8550;
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

app.use('/videos', videoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
