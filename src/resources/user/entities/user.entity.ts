import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 80 })
  username: string;

  @Column({ nullable: true })
  password?: string | null;

  @Column('varchar', { length: 60 })
  firstName: string;

  @Column('varchar', { length: 60 })
  lastName: string;

  @Column('varchar', { length: 80 })
  email: string;

  @Column({ nullable: true })
  avatar: string | null;

  @Column('int', { default: 0 })
  rating: number;
}
