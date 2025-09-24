import { Injectable } from '@nestjs/common';
import { CreateVendorPaymentDto } from './dto/create-vendor-payment.dto';
import { UpdateVendorPaymentDto } from './dto/update-vendor-payment.dto';

@Injectable()
export class VendorPaymentService {
  create(createVendorPaymentDto: CreateVendorPaymentDto) {
    return 'This action adds a new vendorPayment';
  }

  findAll() {
    return `This action returns all vendorPayment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vendorPayment`;
  }

  update(id: number, updateVendorPaymentDto: UpdateVendorPaymentDto) {
    return `This action updates a #${id} vendorPayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} vendorPayment`;
  }
}
