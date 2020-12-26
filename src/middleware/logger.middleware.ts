import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const { method, path, query, params, body } = req;
    console.log(method, path, query, params, body);
    next();
  }
}
