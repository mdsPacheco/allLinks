import express, { json } from 'express';
import cors from 'cors';

import Routes_Application_Core from './routes/Routes_Application_Core';


const app = express();

app.use(cors());
app.use(json());

app.use(Routes_Application_Core);

const port = process.env.PORT || 3010;
app.listen(port);