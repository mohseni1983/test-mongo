import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Blockchain } from "../model/blockchain.entity";
import { Repository } from "typeorm";
import { CreateBlockchainDto } from "../dto/create-blockchain.dto";

@Injectable()
export class BlockchainService {
  constructor(
    @InjectRepository(Blockchain) private blockchainRepository:Repository<Blockchain>
  ) {
  }

  async create(createBlockchainDto:CreateBlockchainDto):Promise<Blockchain>{
    const {name,symbol}=createBlockchainDto
    return await this.blockchainRepository.save({
      name,
      symbol
    })
  }

  async getAll():Promise<Blockchain[]>{
    return await this.blockchainRepository.find()
  }

}