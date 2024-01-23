import { request, response } from "express"
import Patrimony from "../schemas/Patrimony.js"

class PatrimonyController {
  async find(req = request, res = response) {
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

  async create(req = request, res = response) {
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

  async put(req = request, res = response) {
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

  async delete(req = request, res = response) {
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
