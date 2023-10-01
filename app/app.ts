import express from 'express';
import mongoose from 'mongoose';
import userRouter from './userRouter';

const app = express();
const port = 3000;

const DB_URL =
  'mongodb+srv://admin:admin@cluster0.6au3jzx.mongodb.net/invest-rating?retryWrites=true&w=majority';

app.use(express.json());
app.use('/users', userRouter);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(port, () => {
      console.log(`Listen on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();
