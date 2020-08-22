import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Length, IsNotEmpty, IsString } from "class-validator";
import { User } from "./User";
import { F_docentite } from "./F_docentete";

@Entity()
@Unique(["docligneId"])
export class F_docligne {
  @PrimaryGeneratedColumn()
  docligneId: number;

  @Column()
  @Length(4, 20)
  @IsNotEmpty()
  @IsString()
  docligneNumero: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne((type) => User, (user) => user.f_doclignes)
  user: User;

  @OneToMany((type) => F_docentite, (docentite) => docentite.f_docligne)
  public f_docentites: F_docentite[];
}
