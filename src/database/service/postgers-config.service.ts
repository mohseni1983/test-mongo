import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Blockchain } from "../../crypto/model/blockchain.entity";
import { Arch } from "../../crypto/model/arch.entity";

export class PostgersConfigService implements TypeOrmOptionsFactory{
  createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    const option:TypeOrmModuleOptions={
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'123456',
      database:'crypto',
      entities:[Blockchain,Arch],
      synchronize:true
    }
    return option;
  }

}