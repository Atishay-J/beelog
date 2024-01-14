import mongoose from 'mongoose';

const URI = process.env.DB_URI as string;

mongoose
  .connect(URI)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Error while connecting Database \n', err));
