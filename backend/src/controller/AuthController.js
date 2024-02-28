import { request, response } from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../schemas/User.js"

class AuthController {
  async authenticate(req = request, res = response) {
    const { email, password } = req.body

    try {

      const user = await User.findOne({ $where: { email } })

      if (!user) {
        return res.status(404).json({
          error: "User Not Found",
          message: error,
        })
      }

      const isValuesPassword = await bcrypt.compare(password, user.password)

      if (!isValuesPassword) {
        return res.status(404).json({
          error: "Password invalid",
          message: error,
        })
      }

      const token = jwt.sign({ id: user._id }, process.env.PRIVATE_kEY, {
        expiresIn: "3d",
      })

      return res.status(201).json(user, token)
    } catch (error) {
      return res.status(500).json({
        error: "Registratio failed",
        message: error,
      })
    }
  }
}
export default new AuthController()
