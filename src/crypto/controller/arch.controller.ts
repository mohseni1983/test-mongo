import { Body, Controller, Get, Post } from "@nestjs/common";
import { ArchService } from "../service/arch.service";
import { CreateArchDto } from "../dto/create-arch.dto";
import { AssignBlockchainToArchDto } from "../dto/assign-blockchain-to-arch.dto";

@Controller('arch')
export class ArchController {
  constructor(
    private archService:ArchService
  ) {
  }
  @Post('create')
  async create(@Body() createArchDto:CreateArchDto):Promise<any>{
    return this.archService.create(createArchDto)
  }

  @Post('assignBlockchain')
  async assignBlockchain(@Body() assignBlockchain:AssignBlockchainToArchDto):Promise<any>{
    return await this.archService.assignBlockchain(assignBlockchain)
  }

  @Get('all')
  async getAll():Promise<any>{
    return await this.archService.getAll()
  }
}