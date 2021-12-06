import { Request, Response } from "express";
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from "../models/User";

class AuthController {
  async authenticate(req: Request, res: Response) {
    const repository = getRepository(User)
    const { email, password } = req.body

    const user = await repository.findOne({ where: { email } })

    if (user) {
      const isValidPassword = await bcrypt.compare(password, user.password)

      if (!isValidPassword) {
        return res.status(200).send({error: true, msg:"Login não é válido"})
      }

      const userId = user.id

      const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' })

      return res.json({
        email,
        userId,
        token,
      })
    }
    
    res.status(401).send("Login não é válido")
  }
}

export default new AuthController();
