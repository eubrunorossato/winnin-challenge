import express from 'express';
import bodyParser from 'body-parser';
import routes from '../router';
import helmet from 'helmet'

const app = express();

app.use(bodyParser.json());
app.use(routes);
app.use(helmet())

export default app;
