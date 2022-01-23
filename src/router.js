import {Router} from 'express';
import reditService from './services/redit';

const app = Router();

app.get('/redit/hot/artificial', async (req, res) => {
  const response = await reditService.getPerPeriod(req);
  res.json(response);
});

export default app;
