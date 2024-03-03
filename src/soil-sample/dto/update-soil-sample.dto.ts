import { PartialType } from '@nestjs/mapped-types';
import { CreateSoilSampleDto } from './create-soil-sample.dto';

export class UpdateSoilSampleDto extends PartialType(CreateSoilSampleDto) {}
