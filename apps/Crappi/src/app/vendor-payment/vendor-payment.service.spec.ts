import { Test, TestingModule } from '@nestjs/testing';
import { VendorPaymentService } from './vendor-payment.service';

describe('VendorPaymentService', () => {
  let service: VendorPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendorPaymentService],
    }).compile();

    service = module.get<VendorPaymentService>(VendorPaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
