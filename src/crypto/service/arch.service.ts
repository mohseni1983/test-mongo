import { BadRequestException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository, Repository } from "typeorm";
import { Arch } from "../model/arch.entity";
import { CreateArchDto } from "../dto/create-arch.dto";
import { ArchRepository } from "../repository/arch.repository";
import { AssignBlockchainToArchDto } from "../dto/assign-blockchain-to-arch.dto";
import { BlockchainRepository } from "../repository/blockchain.repository";

@Injectable()
export class ArchService{
  constructor(
    @InjectRepository(ArchRepository) private  archRepository:ArchRepository,
    @InjectRepository(BlockchainRepository) private blockchainRepository:BlockchainRepository
  ) {
  }

  async create(createArchDto:CreateArchDto):Promise<Arch>{
    return await this.archRepository.createArch(createArchDto)
  }

  async assignBlockchain(assignBlockchain:AssignBlockchainToArchDto):Promise<Arch>{
    const arch=await this.archRepository.findOne({where:{id:assignBlockchain.arch_id,deleted:false},relations:['obj_blockchain']})
    if(!arch)
      throw new NotFoundException('Arch not found')
    const blockchain=await this.blockchainRepository.findOne({where:{id:assignBlockchain.blockchain_id,
        deleted:false}})
    if(!blockchain)
      throw new NotFoundException('Blockchain not found')
    if(arch.obj_blockchain)
      throw new BadRequestException(`Arch already have ${arch.obj_blockchain.name}`)
    arch.obj_blockchain=blockchain
    const savedArch=await this.archRepository.save(arch)
    return savedArch
  }

  async getAll():Promise<Arch[]>{
    return await this.archRepository.find({where:{deleted:false},relations:['obj_blockchain']})
  }




}