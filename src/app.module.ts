import { Module } from '@nestjs/common';
import { SoilSampleModule } from './soil-sample/soil-sample.module';

@Module({
  imports: [SoilSampleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
