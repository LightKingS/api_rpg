import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Class from './Class';
import User from './User';

@Entity('likes')
class Likes {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({default: true})
  gostou: boolean

  @Column({ nullable: true })
  userId: string

  @Column({ nullable: true })
  classeId: string

  @ManyToOne(() => User, user => user.likes)
  user: User

  @ManyToOne(() => Class, classe => classe.likesClass)
  classe: Class

}

export default Likes