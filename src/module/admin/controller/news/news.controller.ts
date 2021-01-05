import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../../../app.service';
import { BaseService } from '../../../share/service/base/base.service';
import { NewsService } from '../../service/news/news.service';

@Controller('admin/news')
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
}
