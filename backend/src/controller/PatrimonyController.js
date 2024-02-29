import express from "express"
import Patrimony from "../schemas/Patrimony.js"
const { Request, Response } = express

class PatrimonyController {
  async find(req = Request, res = Response) {
    try {
      const patrimonies = await Patrimony.find()
      return res.status(200).json(patrimonies)
    } catch (error) {
      return res.status(500).json({
        error: "Something wrong happend, try again",
        message: error,
      })
    }
  }

  async create(req = Request, res = Response) {
    const {
      sector,
      numberPatrimony,
      description,
      unitDeliveryDate,
      previousSector,
      transferDate,
      destinationLocation,
    } = req.body

    try {
      const patrimony = await Patrimony.create({
        sector,
        numberPatrimony,
        description,
        unitDeliveryDate,
        previousSector,
        transferDate,
        destinationLocation,
      })

      return res.status(201).json(patrimony)
    } catch (error) {
      return res.status(500).json({
        error: "Registratio failed",
        message: error,
      })
    }
  }

  async put(req = Request, res = Response) {
    const { id } = req.params
    const {
      sector,
      numberPatrimony,
      description,
      unitDeliveryDate,
      previousSector,
      transferDate,
      destinationLocation,
    } = req.body

    try {
      const patrimony = await Patrimony.findByIdAndUpdate(id, {
        sector,
        numberPatrimony,
        description,
        unitDeliveryDate,
        previousSector,
        transferDate,
        destinationLocation,
      })

      return res.status(201).json(patrimony)
    } catch (error) {
      return res.status(500).json({
        error: "Something wrong happend, try again",
        message: error,
      })
    }
  }

  async delete(req = Request, res = Response) {
    const { id } = req.params

    try {
      const patrimony = await Patrimony.findByIdAndDelete(id)

      return res.status(200).json(patrimony)
    } catch (error) {
      return res.status(500).json({
        error: "Something wrong happend, try again",
        message: error,
      })
    }
  }
}

export default new PatrimonyController()
