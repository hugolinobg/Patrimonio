import mongoose from "mongoose"

const Patrimony = new mongoose.Schema(
  {
    sector: {
      type: String,
      required: true,
    },
    numberPatrimony: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    unitDeliveryDate: {
      type: String,
      required: true,
    },
    previousSector: {
      type: String,
    },
    transferDate: {
      type: String,
    },
    destinationLocation: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model("Patrimony", Patrimony)
