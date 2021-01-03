import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './strategies/google.strategy';
import { KakaoStrategy } from './strategies/kakao.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, KakaoStrategy]
})
export class AuthModule {}
