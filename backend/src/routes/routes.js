import { Router } from "express"
import patrimonyController from "../controller/PatrimonyController.js"
import userController from "../controller/UserController .js"

const routes = Router()

routes.get("/api/patrimony", patrimonyController.find)
routes.post("/api/patrimony", patrimonyController.create)
routes.put("/api/patrimony/:id", patrimonyController.put)
routes.delete("/api/patrimony/:id", patrimonyController.delete)

routes.get("/api/users", userController.find)
routes.post("/api/user", userController.create)
routes.put("/api/user/:id", userController.put)
routes.delete("/api/user/:id", userController.delete)

export default routes
