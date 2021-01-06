import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
// 加载cookie

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // let n = Math.random();
    // console.log('守卫执行了', n);
    // return n > 0.3;
    const req = context.switchToHttp().getRequest();
    console.log('req', req.path);
    if (req.path == '/admin/login') return true;
    const userInfo = context.switchToHttp().getRequest().session.username;
    console.log('userInfo', userInfo);
    if (userInfo) return true;
    return false;
  }
}
