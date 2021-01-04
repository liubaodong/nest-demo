import { Controller, UsePipes, Get, Query } from '@nestjs/common';
import { UserPipe } from 'src/pipe/user.pipe';

@Controller('user')
export class UserController {
  @Get()
  index() {
    return '用户页面'
  }
  @Get('pipe')
  @UsePipes(new UserPipe())
  pipe(@Query() info) {
    console.log('info', info)
    return info
  }
}
