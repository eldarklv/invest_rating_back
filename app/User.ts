import mongoose from 'mongoose';

const User = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  city: { type: String, required: false }
});

export default mongoose.model('User', User);
