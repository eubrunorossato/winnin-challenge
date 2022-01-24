import { Router } from 'express';
import reditService from './services/redit';

const app = Router();

app.get('/redit/hot/artificial', async (req, res) => {
  const { code, message } = await reditService.getPerPeriod();
  res.status(code).json({ message });
});

export default app;
