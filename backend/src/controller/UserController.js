import express from "express"
import bcrypt from "bcryptjs"
import User from "../schemas/User.js"
const { Request, Response } = express

class UserController {
  async find(req = Request, res = Response) {
    try {
      const users = await User.find()
      return res.status(200).json(users)
    } catch (error) {
      return res.status(500).json({
        message: `Something wrong happend, try again: ${error}`,
      })
    }
  }

  async create(req = Request, res = Response) {
    const { name, email, password, nif, admin } = req.body

    const userExists = await User.findOne(
      { name: name, email: email, nif: nif },
      { _id: 0 }
    )

    if (userExists) {
      return res.status(404).json({
        message: "User exists",
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
        message: `Registratio failed: ${error}`,
      })
    }
  }

  async put(req = Request, res = Response) {
    const { id } = req.params
    const { name, email, password, nif, admin } = req.body

    const hashPassword = await bcrypt.hash(password, 10)

    try {
      const user = await User.findByIdAndUpdate(id, {
        name,
        email,
        password: hashPassword,
        nif,
        admin,
      })

      return res.status(200).json(user)
    } catch (error) {
      return res.status(500).json({
        message: `Something wrong happend, try again: ${error}`,
      })
    }
  }

  async delete(req = Request, res = Response) {
    const { id } = req.params

    try {
      const user = await User.findByIdAndDelete(id)

      return res.status(200).json(user)
    } catch (error) {
      return res.status(500).json({
        message: `Something wrong happend, try again: ${error}`,
      })
    }
  }
}

export default new UserController()
