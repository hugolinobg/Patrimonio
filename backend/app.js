import express from "express"
import cors from "cors"

import mongoDb from "./src/db/mongoDb.js"
import routes from "./src/routes/routes.js"

const app = express()
const port = 3000

app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*")
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
  app.use(
    cors({
      origin: "*",
    })
  )
  next()
})
app.use(express.json())
app.use(routes)

app.get("/", (req, res) => {
  return res.send("Server running!!!")
})

app.listen(port, () => {
  mongoDb().catch((err) => console.log(err))
  console.log(`Server running on the port: ${port}`)
})
