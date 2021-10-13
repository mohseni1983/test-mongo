import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MongodbConfigService } from "./service/mongodb-config.service";

@Module({
  imports:[
    TypeOrmModule.forRootAsync({useClass:MongodbConfigService})
  ]
})
export class DatabaseModule {}
