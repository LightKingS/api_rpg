import { Request, Response } from "express";
import { getRepository } from "typeorm";

import User from "../models/User";

class UserController {
  async retrieve(req: Request, res: Response) {
    try {
      const repository = await getRepository(User).find();
      return res.status(200).json(repository);
    } catch (error) {
      console.log(error);
    }
  }

  index(req: Request, res: Response) {
    return res.json({ userID: req.userId });
  }

  async store(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, password } = req.body;

    const userExists = await repository.findOne({ where: { email } });

    if (userExists) {
      return res.status(409).send("Email já registrado");
    }

    const user = repository.create({ email, password });
    await repository.save(user);

    return res.json(user);
  }
}

export default new UserController();
