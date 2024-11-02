const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// The URL from which to stream the video
const VIDEO_STREAM_URL = 'https://combative-sarine-eypz-god-d4cce0fc.koyeb.app/naruto';

app.get('/naruto.mp4', async (req, res) => {
    try {
        // Fetch the video stream from the external URL
        const response = await axios.get(VIDEO_STREAM_URL, {
            responseType: 'stream',
        });

        // Check if the content type is video
        const contentType = response.headers['content-type'];
        if (!contentType || !contentType.includes('video')) {
            return res.status(400).send('Error: The requested content is not a video.');
        }

        // Set the correct headers for video streaming
        res.setHeader('Content-Type', 'video/mp4');
        res.setHeader('Content-Disposition', 'inline; filename="naruto.mp4"');

        // Pipe the video stream to the response
        response.data.pipe(res);
    } catch (error) {
        console.error('Error fetching video:', error);
        res.status(500).send('Error fetching video');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
