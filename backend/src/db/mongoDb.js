import mongoose from "mongoose"

async function mongoDb() {
  // await mongoose.connect(
  //   "mongodb+srv://HugolinoBG:Li59no87Hu98go17@cluster0.as6xyqg.mongodb.net/?retryWrites=true&w=majority"
  // )
  await mongoose.connect("mongodb://127.0.0.1:27017/patrimony")
}

export default mongoDb
