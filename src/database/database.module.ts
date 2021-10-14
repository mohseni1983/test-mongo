import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MongodbConfigService } from "./service/mongodb-config.service";
import { PostgersConfigService } from "./service/postgers-config.service";

@Module({
  imports:[
    TypeOrmModule.forRootAsync({useClass:PostgersConfigService})
  ]
})
export class DatabaseModule {}
