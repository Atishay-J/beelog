import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
dotenv.config();
import '../src/db/conn';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use('/', routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
