import express from "express"
import "dotenv/config"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../schemas/User.js"
const { Request, Response } = express

class AuthController {
  async auth(req = Request, res = Response) {
    const { email, password } = req.body

    try {
      const user = await User.findOne(
        { email: email },
        { nif: 0, admin: 0, createdAt: 0, updatedAt: 0 }
      )

      if (!user) {
        return res.status(404).json({
          error: `User Not Found`,
        })
      }

      const isValuesPassword = await bcrypt.compare(password, user.password)

      if (!isValuesPassword) {
        return res.status(404).json({
          error: `Password invalid`,
        })
      }

      const token = jwt.sign({ id: user._id }, `${process.env.JWT_KEY}`, {
        expiresIn: "1d",
      })

      const { _id } = user

      return res.status(201).json({ user: { _id, email }, token })
    } catch (error) {
      return res.status(500).json({
        message: `Registratio failed: ${error}`,
      })
    }
  }
}
export default new AuthController()
