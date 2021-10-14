import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Blockchain } from "../../crypto/model/blockchain.entity";
import { Arch } from "../../crypto/model/arch.entity";

export class MongodbConfigService implements TypeOrmOptionsFactory{
  createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    const options:TypeOrmModuleOptions={
      type:'mongodb',
      url:'mongodb://localhost:27017',
      database:'sample',
      entities: [
       Blockchain,Arch
      ],
      // ,
      // //ssl: true,
       useUnifiedTopology: true,
       useNewUrlParser: true
    }
    return options;
  }

}