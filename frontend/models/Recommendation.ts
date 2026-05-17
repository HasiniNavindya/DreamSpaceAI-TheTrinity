import mongoose from "mongoose";

const RecommendationSchema = new mongoose.Schema({
  style: {
    type: String,
    required: true,
  },
  furniture: [String],
  lighting: [String],
  colors: [String],
  tips: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Recommendation || mongoose.model("Recommendation", RecommendationSchema);
