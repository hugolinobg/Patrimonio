import express from "express"
import "dotenv/config"
import jwt from "jsonwebtoken"
const { Request, Response, NextFunction } = express

function AuthMiddlewares(req = Request, res = Response, next = NextFunction) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ error: "Token not provided" })
  }

  const [, token] = req.headers.authorization.split(" ")

  try {
    const decoded = jwt.verify(token, `${process.env.JWT_KEY}`)

    req.userId = decoded.id

    next()
  } catch (error) {
    return res.status(401).json({ error: "Token invalid" })
  }
}

export default AuthMiddlewares
