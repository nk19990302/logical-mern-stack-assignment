import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  task: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true
  }
});

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;