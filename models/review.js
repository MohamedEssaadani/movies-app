import mongoose from "mongoose"

const reviewSchema = mongoose.Schema(
  {
    filmId: {
      type: Number,
    },
    name: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Review = mongoose.model("Review", reviewSchema)

export default Review
