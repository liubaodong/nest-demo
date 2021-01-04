import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
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
    return { result: '我是news列表api接口' };
  }
}
