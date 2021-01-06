import { Controller, Get, Request } from '@nestjs/common';

@Controller('admin/login')
export class LoginController {
  @Get()
  index(@Request() req) {
    // 登入设置 session
    req.session.username = '张三';
    return '登入成功';
  }

  @Get('test')
  testIndex(@Request() req) {
    // 登入 设置 session
    return req.session.username;
  }
}
