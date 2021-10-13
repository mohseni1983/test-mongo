import { Column, Entity, Generated, ObjectID, ObjectIdColumn, OneToMany } from "typeorm";
import { Blockchain } from "./blockchain.entity";

@Entity()
export class Arch {
  @ObjectIdColumn()
  id:ObjectID


  @Column()
  @Generated('uuid')
  obj_arch:string


  @Column()
  name:string

  @OneToMany(()=>Blockchain,(p)=>p.arch)
  blockchains:Blockchain[]


}