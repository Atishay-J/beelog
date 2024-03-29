import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
dotenv.config();
import '../src/db/conn';
import bodyParser from 'body-parser';
import '../src/cache';

const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.use('/', routes);

app.get('/', (req, res) => {
  res.send('Hello Beelog!');
});

app.listen(PORT, () => {
  console.log(`Beelog server listening on port ${PORT}`);
});
