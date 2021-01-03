import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './resources/auth/auth.module';
import { TestGcpModule } from './resources/test-gcp/test-gcp.module';
// import { TypeOrmConfigService } from './config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TestGcpModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
