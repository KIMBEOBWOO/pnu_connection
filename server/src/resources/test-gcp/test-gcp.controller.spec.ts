import { Test, TestingModule } from '@nestjs/testing';
import { TestGcpController } from './test-gcp.controller';

describe('TestGcpController', () => {
  let controller: TestGcpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestGcpController],
    }).compile();

    controller = module.get<TestGcpController>(TestGcpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
