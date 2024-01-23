import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, // username must be unique
    },
    email: {
      type: String,
      required: true,
      unique: true, // email must be unique
    },
    password: {
      type: String,
      required: true, // password must be provided
    },
  },
  { timestamps: true } // createdAt, updatedAt
);

const User = mongoose.model('User', userSchema);

export default User;
