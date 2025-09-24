import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverLocationDto } from './create-driver-location.dto';

export class UpdateDriverLocationDto extends PartialType(CreateDriverLocationDto) {}
