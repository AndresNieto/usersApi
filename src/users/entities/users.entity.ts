import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  first_name: string;

  @Column({ length: 100, nullable: false })
  last_name: string;

  @Column({ nullable: false })
  date_birth: Date;

  @Column({ length: 100, nullable: false })
  address: string;

  @Column({ length: 120, nullable: false })
  password: string;

  @Column({ length: 10, nullable: false })
  mobile_phone: string;

  @Column({ length: 20, nullable: false })
  email: string;

  @Column({ nullable: true, default: true })
  session_active: boolean;
}