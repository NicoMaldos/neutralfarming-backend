import { Injectable } from '@nestjs/common';
// import { CreateSoilSampleDto } from './dto/create-soil-sample.dto';
// import { UpdateSoilSampleDto } from './dto/update-soil-sample.dto';
import { PrismaService } from 'src/prisma.service';
import { SoilSample } from './soil-sample.model';

@Injectable()
export class SoilSampleService {
  constructor(private prisma: PrismaService) {}

  create(data: SoilSample): Promise<SoilSample> {
    //cambiar a dto¿?
    return this.prisma.soilSample.create({ data });
  }

  findAll(): Promise<SoilSample[] | null> {
    return this.prisma.soilSample.findMany();
  }

  findOne(id: number): Promise<SoilSample | null> {
    return this.prisma.soilSample.findUnique({ where: { id: Number(id) } });
  }

  // update(id: number, updateSoilSampleDto: UpdateSoilSampleDto) {
  //   return `This action updates a #${id} soilSample`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} soilSample`;
  // }
}
