import { Column, Entity, OneToMany, PrimaryGeneratedColumn, } from 'typeorm';
import Likes from './Likes';

@Entity('classes')
class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string

  @Column({default: 5, nullable:true})
  strength: number

  @Column({default: 5})
  vitality: number

  @Column({default: 5})
  dexterity: number

  @Column({default: 5})
  inteligence: number

  @Column({default: 5})
  picture: string

  @Column({default: 0})
  likes: number

  @Column({default: 0})
  dislikes: number

  @OneToMany(() => Likes, likes => likes.classe)
  likesClass: Likes[]

}

export default Class