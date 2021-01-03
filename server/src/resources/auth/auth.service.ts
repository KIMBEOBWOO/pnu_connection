import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

  googleLogin(req){
    if(!req.user){
      return 'no user';
    }

    return {
      user: req.user
    }
  }

  kakaoLogin(req){
    if(!req.user){
      return 'no user';
    }

    return {
      user: req.user
    }
  }
}
