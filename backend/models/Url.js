import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  originUrl: {
    type: String,
    required: true,
  },
  shortenedUrl: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

export default urlSchema;
