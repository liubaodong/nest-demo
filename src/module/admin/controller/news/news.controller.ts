import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from '../../../../app.service';
import { AuthGuard } from '../../../../guard/auth.guard';
import { BaseService } from '../../../share/service/base/base.service';
import { NewsService } from '../../service/news/news.service';

@Controller('admin/news')
@UseGuards(AuthGuard) //使用守卫
export class NewsController {
  constructor(
    private newsService: NewsService,
    private appService: AppService,
    private baseService: BaseService,
  ) {}
  @Get()
  index() {
    console.log(this.appService.getConfig());
    console.log(this.baseService.getData());
    return '我是admin里面的news页面';
  }
  @Get('add')
  index2() {
    console.log('add');
    return 'add';
  }
}
