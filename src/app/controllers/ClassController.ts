import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Class from "../models/Class";

class ClassController {
  async retrieve(req: Request, res: Response) {
    try {
      const repository = await getRepository(Class).find();
      return res.status(200).json(repository);
    } catch (error) {
      console.log(error);
    }
  }

  async store(req: Request, res: Response) {
    const repository = getRepository(Class);
    const { name, strength, dexterity, vitality, inteligence, picture } =
      req.body;

    const classExists = await repository.findOne({ where: { name } });

    if (classExists) {
      return res.status(409).send("Classe já existe, troque o nome");
    }

    const classCreated = repository.create({
      name,
      strength,
      dexterity,
      vitality,
      inteligence,
      picture,
    });
    await repository.save(classCreated);

    return res.json(classCreated);
  }

  async giveLike(req: Request, res: Response) {
    try {
      const repository = getRepository(Class);
      const { gostou, classeId } = req.body;

      const classFound = await repository.findOne({where: {id: classeId}})
      console.log('alo')

      if (classFound) {
        console.log('entrou no classFound')
        if (gostou){
          console.log('entrou no gostou')
          classFound.likes = classFound.likes + 1
          const likesUpdate = await repository.save(classFound);
          return res.json(likesUpdate);
        } else {
          classFound.dislikes = classFound.dislikes + 1
          const dislikesUpdate = await repository.save(classFound)
          return res.json(dislikesUpdate)
        }
      }
      
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ClassController();
