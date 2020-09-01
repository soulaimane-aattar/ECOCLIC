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
import * as bcrypt from "bcryptjs";
import { F_comptet } from "./F_comptet";
import { F_docligne } from "./F_docligne";
import { F_article } from "./F_article";
import { F_docentete } from "./F_docentete";
import { Role } from "./Role";

@Entity()
@Unique(["username"])
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  @Length(4, 20)
  @IsNotEmpty()
  username: string;

  @Column()
  @Length(4, 100)
  @IsNotEmpty()
  userPassword: string;

  @Column()
  @Length(4, 100)
  userPhoto: string;

  @Column()
  @Length(4, 20)
  @IsNotEmpty()
  @IsString()
  userFirstName: string;

  @Column()
  @Length(4, 20)
  @IsNotEmpty()
  @IsString()
  userLastName: string;

  @Column()
  @Length(4, 20)
  positionLatitude: string;

  @Column()
  @Length(4, 20)
  positionLangitude: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne((type) => F_comptet, (compte) => compte.users)
  f_compte: F_comptet;

  @OneToMany((type) => F_docligne, (docligne) => docligne.user)
  f_doclignes: F_docligne[];

  @OneToMany((type) => F_article, (article) => article.user)
  f_articles: F_article[];

  @OneToMany((type) => F_docentete, (docentete) => docentete.user)
  F_docentete: F_docentete[];

  @ManyToOne((type) => Role, (role) => role.users)
  role: Role;

  hashPassword() {
    this.userPassword = bcrypt.hashSync(this.userPassword, 8);
  }

  public checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.userPassword);
  }
}
