import { Column, Entity, Generated, ManyToOne, ObjectID, ObjectIdColumn } from "typeorm";
import { Arch } from "./arch.entity";

@Entity()
export class Blockchain {
  @ObjectIdColumn()
  id:ObjectID


  @Column()
  @Generated('uuid')
  obj_blockchain:string


  @Column()
  name:string

  @Column()
  symbol:string

  @ManyToOne(()=>Arch,(p)=>p.blockchains)
  arch:Arch
}