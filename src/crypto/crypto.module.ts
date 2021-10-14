import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Blockchain } from "./model/blockchain.entity";
import { Arch } from "./model/arch.entity";
import { BlockchainService } from "./service/blockchain.service";
import { BlockchainController } from "./controller/blockchain.controller";
import { ArchService } from "./service/arch.service";
import { ArchController } from "./controller/arch.controller";
import { ArchRepository } from "./repository/arch.repository";
import { BlockchainRepository } from "./repository/blockchain.repository";

@Module({
  imports:[
    TypeOrmModule.forFeature([ArchRepository,BlockchainRepository])
  ],
  providers:[
    BlockchainService,
    ArchService
  ],
  controllers:[
    BlockchainController,
    ArchController
  ]
})
export class CryptoModule {}
