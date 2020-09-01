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
import {
  Length,
  IsNotEmpty,
  IsString,
  IsInt,
  IsDecimal,
} from "class-validator";
import { F_docligne } from "./F_docligne";
import { F_article } from "./F_article";
import { User } from "./User";

@Entity()
@Unique(["docentiteId"])
export class F_docentete {
  @PrimaryGeneratedColumn()
  docentiteId: number;

  @Column()
  @Length(4, 20)
  @IsNotEmpty()
  @IsInt()
  quantite: number;

  @Column()
  @Length(4, 20)
  @IsNotEmpty()
  @IsDecimal()
  prixTotal: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne((type) => User, (user) => user.f_doclignes)
  user: User;

  @OneToMany((type) => F_docligne, (docligne) => docligne.f_docentete)
  public f_docligne: F_docligne[];

  @ManyToOne((type) => F_article, (article) => article.f_docentete)
  f_article: F_article;
}
