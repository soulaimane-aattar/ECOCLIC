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
import { Length, IsNotEmpty, IsString, IsInt } from "class-validator";
import { User } from "./User";
import { F_docentete } from "./F_docentete";
import { F_article } from "./F_article";

@Entity()
@Unique(["docligneId"])
export class F_docligne {
  @PrimaryGeneratedColumn()
  docligneId: number;

  @Column({ nullable: true })
  @Length(4, 20)
  @IsString()
  docligneNumero: string;

  @Column({ nullable: true })
  @Length(4, 20)
  @IsInt()
  quantite: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne((type) => User, (user) => user.f_doclignes)
  user: User;

  @ManyToOne((type) => F_docentete, (docentite) => docentite.f_docligne)
  f_docentete: F_docentete;

  @ManyToOne((type) => F_article, (article) => article.f_docligne)
  f_article: F_article;
}
