import { Controller, UsePipes, Get, Query } from '@nestjs/common';
import { UserPipe } from 'src/pipe/user.pipe';
import * as Joi from '@hapi/joi';

let userSchema = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().integer().min(6).max(66).required(),
});

@Controller('user')
export class UserController {
  @Get()
  index() {
    return '用户页面';
  }
  @Get('pipe')
  @UsePipes(new UserPipe(userSchema))
  pipe(@Query() info) {
    console.log('info', info);
    return info;
  }
}
