import { Injectable } from '@nestjs/common';


@Injectable()
export class TestGcpService {
  async testGcp(){
    return "success";
  }
}
