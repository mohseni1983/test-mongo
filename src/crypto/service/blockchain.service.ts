import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Blockchain } from "../model/blockchain.entity";
import { MongoRepository, Repository } from "typeorm";
import { CreateBlockchainDto } from "../dto/create-blockchain.dto";
import { BlockchainRepository } from "../repository/blockchain.repository";

@Injectable()
export class BlockchainService {
  constructor(
    @InjectRepository(BlockchainRepository) private blockchainRepository:BlockchainRepository
  ) {
  }

  async create(createBlockchainDto:CreateBlockchainDto):Promise<Blockchain>{
    return await this.blockchainRepository.creatBlockchain(createBlockchainDto)
  }

  async getAll():Promise<Blockchain[]>{
    return await this.blockchainRepository.find({relations:['obj_arch']})
  }

}