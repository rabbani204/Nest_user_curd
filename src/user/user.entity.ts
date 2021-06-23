import { BaseEntity } from "../base-entity";
import { Column, Entity } from "typeorm";

@Entity('user')
export class User extends BaseEntity{
  @Column({ type: 'varchar', length: 100, nullable: false })
  firstname: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  lastname: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  mobile: string;

  @Column({ type: 'text', nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  fcm: string;
  
}