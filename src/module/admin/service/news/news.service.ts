import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  getNews() {
    return [{ title: '新闻111' }, { title: '新闻222' }];
  }
}
