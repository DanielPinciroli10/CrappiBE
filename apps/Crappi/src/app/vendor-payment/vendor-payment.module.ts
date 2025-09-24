import { Module } from '@nestjs/common';
import { VendorPaymentService } from './vendor-payment.service';
import { VendorPaymentController } from './vendor-payment.controller';

@Module({
  controllers: [VendorPaymentController],
  providers: [VendorPaymentService],
})
export class VendorPaymentModule {}
