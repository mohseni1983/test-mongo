import {
  AfterInsert,
  Column,
  Entity,
  Generated,
  Index, JoinColumn,
  ManyToOne,
  ObjectID,
  ObjectIdColumn, OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Arch } from "./arch.entity";

@Entity()
export class Blockchain {
  @PrimaryGeneratedColumn('uuid')
  id:string

  @Column()
  name:string

  @Column()
  symbol:string

  @Column({default:false})
  deleted:boolean

  @OneToOne(()=>Arch,{cascade:true})
  @JoinColumn()
  obj_arch:Arch
}