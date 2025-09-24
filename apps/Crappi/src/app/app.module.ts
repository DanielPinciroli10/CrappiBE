import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { VendorModule } from './vendor/vendor.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { ReviewModule } from './review/review.module';
import { DriverLocationModule } from './driver-location/driver-location.module';
import { VendorPaymentModule } from './vendor-payment/vendor-payment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Martino46512338',
      database: 'CrappiBD',
      autoLoadEntities: true,
      synchronize: true, // ojo: solo para dev
    }),
    UserModule,
    AddressModule,
    VendorModule,
    ProductModule,
    OrderModule,
    OrderItemModule,
    ReviewModule,
    DriverLocationModule,
    VendorPaymentModule,
  ],
})
export class AppModule {}

