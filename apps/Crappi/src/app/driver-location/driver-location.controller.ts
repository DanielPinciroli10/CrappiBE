import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverLocationService } from './driver-location.service';
import { CreateDriverLocationDto } from './dto/create-driver-location.dto';
import { UpdateDriverLocationDto } from './dto/update-driver-location.dto';

@Controller('driver-location')
export class DriverLocationController {
  constructor(private readonly driverLocationService: DriverLocationService) {}

  @Post()
  create(@Body() createDriverLocationDto: CreateDriverLocationDto) {
    return this.driverLocationService.create(createDriverLocationDto);
  }

  @Get()
  findAll() {
    return this.driverLocationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverLocationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverLocationDto: UpdateDriverLocationDto) {
    return this.driverLocationService.update(+id, updateDriverLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverLocationService.remove(+id);
  }
}
