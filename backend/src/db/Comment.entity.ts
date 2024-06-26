//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Comment')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  commentText: string;

  @Column('date', { nullable: true })
  dateAdded: Date;

  @Column('integer', { nullable: true })
  userID: number;

  @Column('integer', { nullable: true })
  animeID: number;

  @Column('bool', { nullable: true })
  spoilerFlag: boolean;

  @Column('real', { nullable: true })
  userRating: number;
}
