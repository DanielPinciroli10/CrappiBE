import { Test, TestingModule } from '@nestjs/testing';
import { VendorPaymentController } from './vendor-payment.controller';
import { VendorPaymentService } from './vendor-payment.service';

describe('VendorPaymentController', () => {
  let controller: VendorPaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendorPaymentController],
      providers: [VendorPaymentService],
    }).compile();

    controller = module.get<VendorPaymentController>(VendorPaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
