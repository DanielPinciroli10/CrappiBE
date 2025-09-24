import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerProfileModule } from './customer-profile/customer-profile.module';
import { UserModule } from './user/user.module';
// <-- importamos el módulo

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Martino46512338', //
      database: 'CrappiBD',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CustomerProfileModule,
    UserModule,
    
     // <-- agregamos el módulo acá
  ],
})
export class AppModule {}
