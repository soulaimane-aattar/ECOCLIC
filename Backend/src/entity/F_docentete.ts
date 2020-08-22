import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
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

@Entity()
@Unique(["docentiteId"])
export class F_docentite {
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

  @ManyToOne((type) => F_docligne, (docligne) => docligne.f_docentites)
  f_docligne: F_docligne;

  @ManyToOne((type) => F_article, (article) => article.f_docentites)
  f_article: F_article;
}
