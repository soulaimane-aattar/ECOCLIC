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
import { Length, IsNotEmpty, IsString, IsPositive } from "class-validator";
import { User } from "./User";
import { F_docentite } from "./F_docentete";

@Entity()
@Unique(["articleId"])
export class F_article {
  @PrimaryGeneratedColumn()
  articleId: number;

  @Column()
  @Length(4, 20)
  @IsNotEmpty()
  @IsString()
  articleName: string;

  @Column()
  @Length(4, 100)
  @IsString()
  articlePhoto: string;

  @Column()
  @Length(4, 200)
  @IsString()
  articleDescription: string;

  @Column()
  @Length(4, 20)
  @IsString()
  articleRef: string;

  @Column()
  @Length(4, 100)
  @IsPositive()
  articlePrice: number;

  @Column()
  @Length(4, 100)
  articleCodeBare: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne((type) => User, (user) => user.f_articles)
  user: User;

  @OneToMany((type) => F_docentite, (docentite) => docentite.f_article)
  public f_docentites: F_docentite[];
}
