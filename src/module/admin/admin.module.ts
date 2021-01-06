import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { NewsController } from './controller/news/news.controller';
import { NewsService } from './service/news/news.service';
import { AppService } from './../../app.service';
import { ShareModule } from '../share/share.module';
import { LoginController } from './controller/login/login.controller';

@Module({
  imports: [ShareModule],
  controllers: [UserController, NewsController, LoginController],
  providers: [NewsService, AppService],
})
export class AdminModule {}
