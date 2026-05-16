import mongoose from "mongoose";

const RoomDesignSchema = new mongoose.Schema({
  originalImage: {
    type: String,
    required: true,
  },
  generatedImage: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  prompt: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.RoomDesign || mongoose.model("RoomDesign", RoomDesignSchema);
