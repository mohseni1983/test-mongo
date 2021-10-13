import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Blockchain } from "./model/blockchain.entity";
import { Arch } from "./model/arch.entity";
import { BlockchainService } from "./service/blockchain.service";
import { BlockchainController } from "./controller/blockchain.controller";

@Module({
  imports:[
    TypeOrmModule.forFeature([Blockchain,Arch])
  ],
  providers:[
    BlockchainService
  ],
  controllers:[
    BlockchainController
  ]
})
export class CryptoModule {}
