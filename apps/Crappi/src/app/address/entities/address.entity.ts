import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Relación con User
  @Column()
  userId: string; 

  @ManyToOne(() => User, (user) => user.addresses, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  label: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zipCode: string;

  @Column('decimal', { precision: 10, scale: 6, nullable: true })
  lat: number;

  @Column('decimal', { precision: 10, scale: 6, nullable: true })
  lng: number;

  @Column({ default: false })
  isDefault: boolean;
}

