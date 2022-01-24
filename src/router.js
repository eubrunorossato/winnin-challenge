import { Router } from 'express';
import reditService from './services/redit';

const app = Router();

app.get('/redit/hot/artificial', async (req, res) => {
  const data = await reditService.getPerPeriod();
  res.json(data);
});

export default app;
