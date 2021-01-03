import { Controller, Get } from '@nestjs/common';
import { TestGcpService } from './test-gcp.service';

@Controller('test-gcp')
export class TestGcpController {
  constructor(private readonly testGcpService: TestGcpService) {}

  @Get()
  async testCase1(){
    return this.testGcpService.testGcp();
  }
}
