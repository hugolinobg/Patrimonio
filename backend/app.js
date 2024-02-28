import express from "express"
import cors from "cors"

import mongoDb from "./src/db/mongoDb.js"
import routes from "./src/routes/routes.js"

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(routes)

app.get("/", (req, res) => {
  return res.send("Server running!!!")
})

app.listen(port, () => {
  mongoDb().catch((err) => console.log(err))
  console.log(`Server running on the port: ${port}`)
})
