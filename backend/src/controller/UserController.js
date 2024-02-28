import bcrypt from "bcryptjs"
import { request, response } from "express"
import User from "../schemas/User.js"

class UserController {
  async find(req = request, res = response) {
    try {
      const users = await User.find()
      return res.status(200).json(users)
    } catch (error) {
      return res.status(500).json({
        error: "Something wrong happend, try again",
        message: error,
      })
    }
  }

  async create(req = request, res = response) {
    const { name, email, password, nif, admin } = req.body

    const userExists = await User.findOne({ where: { email } })

    if (userExists) {
      return res.status(404).json({
        error: "User exists",
        message: error,
      })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    try {
      const user = await User.create({
        name,
        email,
        password: hashPassword,
        nif,
        admin,
      })

      return res.status(201).json(user)
    } catch (error) {
      return res.status(500).json({
        error: "Registratio failed",
        message: error,
      })
    }
  }

  async put(req = request, res = response) {
    const { id } = req.params
    const { name, email, nif, admin } = req.body

    try {
      const user = await User.findByIdAndUpdate(id, {
        name,
        email,
        nif,
        admin,
      })

      return res.status(200).json(user)
    } catch (error) {
      return res.status(500).json({
        error: "Something wrong happend, try again",
        message: error,
      })
    }
  }

  async delete(req = request, res = response) {
    const { id } = req.params

    try {
      const user = await User.findByIdAndDelete(id)

      return res.status(200).json(user)
    } catch (error) {
      return res.status(500).json({
        error: "Something wrong happend, try again",
        message: error,
      })
    }
  }
}

export default new UserController()
