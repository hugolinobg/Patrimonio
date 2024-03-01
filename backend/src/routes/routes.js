import { Router } from "express"
import patrimonyController from "../controller/PatrimonyController.js"
import userController from "../controller/UserController.js"
import authController from "../controller/AuthController.js"
import AuthMiddlewares from "../middlewares/auth.js"

const routes = Router()

routes.post("/v1/api/auth", authController.auth)

routes.get("/v1/api/patrimony", patrimonyController.find)
routes.post("/v1/api/patrimony", AuthMiddlewares, patrimonyController.create)
routes.put("/v1/api/patrimony/:id", AuthMiddlewares, patrimonyController.put)
routes.delete(
  "/v1/api/patrimony/:id",
  AuthMiddlewares,
  patrimonyController.delete
)

routes.get("/v1/api/user", AuthMiddlewares, userController.find)
routes.post("/v1/api/user", AuthMiddlewares, userController.create)
routes.put("/v1/api/user/:id", AuthMiddlewares, userController.put)
routes.delete("/v1/api/user/:id", AuthMiddlewares, userController.delete)

export default routes
