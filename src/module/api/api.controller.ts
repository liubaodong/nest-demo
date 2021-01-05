import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}
  @Get()
  index() {
    return { result: '我是api接口' };
  }
  @Get('user')
  userIndex() {
    return { result: '我是user列表api接口' };
  }
  @Get('news')
  newsIndex() {
    console.log(this.apiService.findNews());
    return { result: '我是news列表api接口' };
  }
}
