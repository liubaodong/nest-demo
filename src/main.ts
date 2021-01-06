import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { logger } from './middleware/logger.middleware';
import { AuthGuard } from './guard/auth.guard';

import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.useStaticAssets('public');
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/static/', //设置虚拟路径
  });
  // 全局中间件只能配置函数式中间件
  // app.use(logger);
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // 放视图的文件
  app.setViewEngine('ejs');
  app.use(cookieParser('this signed cookies')); //设置cookie签名
  app.use(
    session({
      secret: 'keyboard cat',
      cookie: { maxAge: 6000, httpOnly: true },
    }),
  ); //配置session

  app.useGlobalGuards(new AuthGuard()); // 全局配置守卫
  await app.listen(3000);
}
bootstrap();
