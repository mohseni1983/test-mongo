import { EntityRepository, MongoRepository, Repository } from "typeorm";
import { Blockchain } from "../model/blockchain.entity";
import { ConflictException, Injectable } from "@nestjs/common";
import { CreateBlockchainDto } from "../dto/create-blockchain.dto";
import * as uuid from 'uuid'
@Injectable()
@EntityRepository(Blockchain)
export class BlockchainRepository extends Repository<Blockchain>{

  async creatBlockchain(createBlockchainDto:CreateBlockchainDto):Promise<Blockchain>{
    if(await this.findOne({where:{name:createBlockchainDto.name,deleted:false}}))
      throw new ConflictException()
    const blockchain=new Blockchain()
    blockchain.name=createBlockchainDto.name
    blockchain.symbol=createBlockchainDto.symbol
    const savedBlockchain=await this.save(blockchain)
    return savedBlockchain
  }

}