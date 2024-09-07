const express = require('express');
const cors = require('cors');
const fg = require('api-dylux');
const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

app.use(express.json());
app.use(cors()); // Enable CORS

app.get('/download/youtube/mp3', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'URL is required' });
  try {
    let data = await fg.yta(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/download/youtube/mp4', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'URL is required' });
  try {
    let data = await fg.ytv(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/download/youtube/ytmp3', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'URL is required' });
  try {
    let data = await fg.ytmp3(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/download/youtube/ytmp4', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'URL is required' });
  try {
    let data = await fg.ytmp4(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/download/tiktok', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'URL is required' });
  try {
    let data = await fg.tiktok(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/download/tiktok2', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'URL is required' });
  try {
    let data = await fg.tiktok2(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/download/igstory', async (req, res) => {
  const username = req.query.username;
  if (!username) return res.status(400).json({ error: 'Username is required' });
  try {
    let data = await fg.igstory(username);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/download/facebook', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'URL is required' });
  try {
    let data = await fg.fbdl(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/download/twitter', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'URL is required' });
  try {
    let data = await fg.twitter(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/download/soundcloud', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'URL is required' });
  try {
    let data = await fg.soundcloudDl(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/download/soundcloud2', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'URL is required' });
  try {
    let data = await fg.soundcloudDl2(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
