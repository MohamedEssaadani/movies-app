import mongoose from "mongoose"

const cinemaSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)

const Cinema = mongoose.model("Cinema", cinemaSchema)

export default Cinema
