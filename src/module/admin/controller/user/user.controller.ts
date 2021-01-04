import { Controller, Get } from '@nestjs/common';

@Controller('userAdmin')
export class UserController {
  @Get()
  index() {
    return '我是admin里面的user页面';
  }
}
