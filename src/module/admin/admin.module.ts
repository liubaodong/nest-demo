import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { NewsController } from './controller/news/news.controller';

@Module({
  controllers: [UserController, NewsController],
})
export class AdminModule {}
