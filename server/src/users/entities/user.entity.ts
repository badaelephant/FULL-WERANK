import { Rank } from 'src/ranks/entities/rank.entity';
import { Vote } from 'src/votes/entities/vote.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  name: string;
  @Column()
  image: string;

  @OneToMany((type) => Rank, (rank) => rank.user)
  ranks: Rank[];
  @OneToMany((type) => Vote, (vote) => vote.user)
  votes: Vote[];

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;
}
