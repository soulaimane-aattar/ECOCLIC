import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import { User } from "./User";

@Entity()
@Unique(["roleName"])
export class Role {
  @PrimaryGeneratedColumn()
  roleId: number;

  @Column()
  @Length(4, 20)
  @IsNotEmpty()
  roleName: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany((type) => User, (user) => user.role)
  public users: User[];
}
