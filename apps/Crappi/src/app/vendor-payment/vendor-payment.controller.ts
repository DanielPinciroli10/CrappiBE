import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendorPaymentService } from './vendor-payment.service';
import { CreateVendorPaymentDto } from './dto/create-vendor-payment.dto';
import { UpdateVendorPaymentDto } from './dto/update-vendor-payment.dto';

@Controller('vendor-payment')
export class VendorPaymentController {
  constructor(private readonly vendorPaymentService: VendorPaymentService) {}

  @Post()
  create(@Body() createVendorPaymentDto: CreateVendorPaymentDto) {
    return this.vendorPaymentService.create(createVendorPaymentDto);
  }

  @Get()
  findAll() {
    return this.vendorPaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorPaymentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendorPaymentDto: UpdateVendorPaymentDto) {
    return this.vendorPaymentService.update(+id, updateVendorPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendorPaymentService.remove(+id);
  }
}
