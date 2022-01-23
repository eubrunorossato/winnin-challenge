import app from './src/config/express';
import https from 'https';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const cb = () => console.log(`Server Running on Port ${process.env.PORT}`);

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
