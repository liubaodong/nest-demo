import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InitMiddleware } from './middleware/init.middleware';
import { NewsMiddleware } from './middleware/news.middleware';
import { UserMiddleware } from './middleware/user.middleware';
import { UserController } from './user/user.controller';
import { AdminModule } from './module/admin/admin.module';
import { DefaultModule } from './module/default/default.module';
import { ApiModule } from './module/api/api.module';

@Module({
  imports: [AdminModule, DefaultModule, ApiModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer
    //   .apply(InitMiddleware)
    //   .forRoutes({ path: '*', method: RequestMethod.A }); // 匹配所有路由

    consumer
      .apply(UserMiddleware, NewsMiddleware)
      .forRoutes(
        { path: 'user', method: RequestMethod.ALL },
        { path: 'news', method: RequestMethod.ALL },
      );
  }
}
