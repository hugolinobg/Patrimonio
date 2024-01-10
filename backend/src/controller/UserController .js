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
    const { name, email, password, nif } = req.body

    try {
      const user = await User.create({
        name,
        email,
        password,
        nif,
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
    const { name, email, nif } = req.body

    try {
      const user = await User.findByIdAndUpdate(id, {
        name,
        email,
        nif,
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
