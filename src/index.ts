import express from 'express';
import { router as exampleRouter } from './router/example'

const app = express();
const port = 3000;

app.use(express.json())

app.use('/example', exampleRouter);

app.listen(port, () => {
  console.log('Listening on localhost:3000');
});