import app from './src/config/express';
import https from 'https';
import fs from 'fs';
import dotenv from 'dotenv';
import dbConnection from './src/postgres/index';
import getRedditService from './src/services/cronJob';
dotenv.config();

const cb = async () => {
  console.log(`Server Running on Port ${process.env.PORT}`);
  await dbConnection();
  getRedditService.redditCron();
};
if (process.env.NODE_ENV === 'LOCALHOST') {
  https
    .createServer(
      {
        key: fs.readFileSync('./certificates/key.pem'),
        cert: fs.readFileSync('./certificates/cert.pem'),
      },
      app
    )
    .listen(process.env.PORT, cb);
} else {
  app.listen(process.env.PORT, cb);
}
