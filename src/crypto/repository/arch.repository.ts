import { EntityRepository, MongoRepository, Repository } from "typeorm";
import { Arch } from "../model/arch.entity";
import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateArchDto } from "../dto/create-arch.dto";
import * as uuid4 from 'uuid'
import { AssignBlockchainToArchDto } from "../dto/assign-blockchain-to-arch.dto";
import { writeHeapSnapshot } from "v8";
import { InjectRepository } from "@nestjs/typeorm";
import { BlockchainRepository } from "./blockchain.repository";
import { Blockchain } from "../model/blockchain.entity";
@Injectable()
@EntityRepository(Arch)
export class ArchRepository extends Repository<Arch>{


  async createArch(createArchDto:CreateArchDto):Promise<Arch>{
    if(await this.findOne({where:{name:createArchDto.name,deleted:false},}))
      throw new ConflictException()
    const arch=new Arch()
    arch.name=createArchDto.name
    const saved_arch=await this.save(arch)
   // delete saved_arch.id
    return saved_arch
  }

}