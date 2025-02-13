import mongoose from 'mongoose';
import app from './app';
import AppErrors from './app/errors/AppErrors';
import dotenv from 'dotenv';
dotenv.config();

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_DB as string);
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    throw new AppErrors(500, `${err}`);
  }
}
main();
