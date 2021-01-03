import { Module } from '@nestjs/common';
import { TestGcpController } from './test-gcp.controller';
import { TestGcpService } from './test-gcp.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Test} from './entities/test.entity';

@Module({
  controllers: [TestGcpController],
  providers: [TestGcpService],
  imports: [TypeOrmModule.forFeature([Test])],
})

export class TestGcpModule {}
