import { Test, TestingModule } from '@nestjs/testing';
import { TestGcpService } from './test-gcp.service';

describe('TestGcpService', () => {
  let service: TestGcpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestGcpService],
    }).compile();

    service = module.get<TestGcpService>(TestGcpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
