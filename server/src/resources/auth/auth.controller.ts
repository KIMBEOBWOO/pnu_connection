import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.authService.googleLogin(req);
  }

  @Get('login/kakao')
  @UseGuards(AuthGuard('kakao'))
  async kakaoLogin(@Req() req) {}

  @Get('login/kakao/callback') 
  @UseGuards(AuthGuard('kakao'))
  kakaoLoginCallback(@Req() req) {
    return this.authService.kakaoLogin(req);
  }
}