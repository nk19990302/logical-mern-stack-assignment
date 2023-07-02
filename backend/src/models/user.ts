require('dotenv').config()
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
});

//custom method to generate authToken 
UserSchema.methods.generateAuthToken = function () {
  const signingKey = process.env.PRIVATE_SIGNING_KEY;
  const token = jwt.sign({ _id: this._id, email: this.email }, signingKey as string);
  return token;
}

const User = mongoose.model("User", UserSchema);

export default User;