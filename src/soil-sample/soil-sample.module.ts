import { Module } from '@nestjs/common';
import { SoilSampleService } from './soil-sample.service';
import { SoilSampleController } from './soil-sample.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SoilSampleController],
  providers: [SoilSampleService, PrismaService],
})
export class SoilSampleModule {}
