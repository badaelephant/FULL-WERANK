import { Candidate } from 'src/candidates/entities/candidate.entity';
import { Item } from 'src/items/entities/item.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('ranks')
export class Rank {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;

  @ManyToOne((type) => User, (user) => user.ranks)
  user: User;

  @OneToMany((type) => Item, (item) => item.rank)
  items: Item[];

  @OneToMany((type) => Candidate, (candidate) => candidate.rank)
  candidates: Candidate[];

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
