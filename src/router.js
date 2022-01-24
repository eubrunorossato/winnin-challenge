import { Router } from 'express';
import reditService from './services/redit';
import postService from './services/post';
import { validateQuery } from './middleware/index';

const app = Router();

app.get('/redit/hot/artificial', async (req, res) => {
  const { code, message } = await reditService.getPosts();
  res.status(code).json({ message });
});

app.get('/post/by-date', validateQuery, async (req, res) => {
  const { code, data, message } = await postService.getByDate(req.query);
  res.status(code).json({ data, message });
});

app.get('/post/by-author', validateQuery, async (req, res) => {
  const { code, data, message } = await postService.getByAuthor(req.query);
  res.status(code).json({ data, message });
});

export default app;
