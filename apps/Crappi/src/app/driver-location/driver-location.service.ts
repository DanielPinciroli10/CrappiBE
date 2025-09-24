import { Injectable } from '@nestjs/common';
import { CreateDriverLocationDto } from './dto/create-driver-location.dto';
import { UpdateDriverLocationDto } from './dto/update-driver-location.dto';

@Injectable()
export class DriverLocationService {
  create(createDriverLocationDto: CreateDriverLocationDto) {
    return 'This action adds a new driverLocation';
  }

  findAll() {
    return `This action returns all driverLocation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverLocation`;
  }

  update(id: number, updateDriverLocationDto: UpdateDriverLocationDto) {
    return `This action updates a #${id} driverLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverLocation`;
  }
}
