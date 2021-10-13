import { Body, Controller, Get, Post } from "@nestjs/common";
import { BlockchainService } from "../service/blockchain.service";
import { CreateBlockchainDto } from "../dto/create-blockchain.dto";

@Controller('blockchain')
export class BlockchainController {
  constructor(
    private blockchainService:BlockchainService
  ) {

  }
  @Get()
  async getAll():Promise<any>{
    return this.blockchainService.getAll()
  }

  @Post('create')
  async create(@Body() createBlockchainDto:CreateBlockchainDto):Promise<any>{
    return this.blockchainService.create(createBlockchainDto)
  }

}