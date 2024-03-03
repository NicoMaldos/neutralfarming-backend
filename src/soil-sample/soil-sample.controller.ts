import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  // Delete,
} from '@nestjs/common';
import { SoilSampleService } from './soil-sample.service';
// import { CreateSoilSampleDto } from './dto/create-soil-sample.dto';
import { SoilSample } from './soil-sample.model';
// import { UpdateSoilSampleDto } from './dto/update-soil-sample.dto';

@Controller('soil-sample')
export class SoilSampleController {
  constructor(private readonly soilSampleService: SoilSampleService) {}

  @Post()
  create(@Body() soilSample: SoilSample) {
    return this.soilSampleService.create(soilSample);
  }

  @Get()
  findAll() {
    return this.soilSampleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soilSampleService.findOne(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateSoilSampleDto: UpdateSoilSampleDto,
  // ) {
  //   return this.soilSampleService.update(+id, updateSoilSampleDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.soilSampleService.remove(+id);
  // }
}
