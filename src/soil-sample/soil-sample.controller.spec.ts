import { Test, TestingModule } from '@nestjs/testing';
import { SoilSampleController } from './soil-sample.controller';
import { SoilSampleService } from './soil-sample.service';

describe('SoilSampleController', () => {
  let controller: SoilSampleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoilSampleController],
      providers: [SoilSampleService],
    }).compile();

    controller = module.get<SoilSampleController>(SoilSampleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
