import { Test, TestingModule } from '@nestjs/testing';
import { SoilSampleService } from './soil-sample.service';

describe('SoilSampleService', () => {
  let service: SoilSampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoilSampleService],
    }).compile();

    service = module.get<SoilSampleService>(SoilSampleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
