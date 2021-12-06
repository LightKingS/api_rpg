import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";

import Class from "../models/Class";
import Likes from "../models/Likes";
import User from "../models/User";

class LikesController {
  async giveLike(req: Request, res: Response, next: NextFunction) {
    try {
      const repository = getRepository(Likes);
      const { gostou, classeId, userId } = req.body;

      const likeAlreadyExists = await repository.findOne({ where: [{
        userId: userId,
        classeId: classeId
      }]
    })
    
    if (likeAlreadyExists) {
      return res.status(200).json({error: true, msg:'Você já avaliou esta classe'})
    }

      const classRepository = getRepository(Class);
      const classFound = await classRepository.findOne({
        where: { id: classeId },
      });

      const userRepository = getRepository(User);
      const userFound = await userRepository.findOne({ where: { id: userId } });

      const likeCreated = repository.create({
        gostou,
        classe: classFound,
        user: userFound,
      });

      await repository.save(likeCreated);
      next()

    } catch (error) {
      console.log(error);
    }
  }

  async retrieve(req: Request, res: Response) {
    try {
      const repository = await getRepository(Likes).find();
      console.log(repository)
      return res.status(200).json(repository);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new LikesController();
