import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyFunction } from 'passport-kakao';
import { config } from 'dotenv';

import { Injectable } from '@nestjs/common';

config(); 

type VerifyCallback = (error: any, user?: any, info?: any) => void;

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, 'kakao') {

  constructor() {
    super({
      clientID: process.env.KAKAO_CLIENT_ID,
      callbackURL: process.env.KAKAO_CALLBACK,
    });
  }

  async validate (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    console.log('[Kakao Profile in Strategy]')
    console.log(profile);
    console.log(accessToken, refreshToken);

    done(null, profile);
  }
}