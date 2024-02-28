import mongoose from "mongoose"

const User = new mongoose.Schema(
  {
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
      // select: false,
      required: true,
    },
    nif: {
      type: String,
      required: true,
    },
    admin: {
      type: Boolean,
      required: true,
    }
  },
  {
    timestamps: true,
  }
)

export default mongoose.model("User", User)
