import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Generated,
  OneToMany,
} from "typeorm";
import { Length, IsNotEmpty, IsString } from "class-validator";
import { User } from "./User";

@Entity()
@Unique(["compteNum"])
export class F_comptet {
  @Column()
  @Generated("increment")
  F_compteId: number;

  @Column()
  @Length(4, 20)
  @IsNotEmpty()
  @IsString()
  compteIntitule: string;

  @PrimaryColumn()
  @Length(4, 100)
  @IsNotEmpty()
  compteNum: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany((type) => User, (user) => user.f_compte)
  public users: User[];
}
