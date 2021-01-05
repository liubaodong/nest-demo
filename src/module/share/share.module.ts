import { Module } from '@nestjs/common';
import { BaseService } from './service/base/base.service';

@Module({
  providers: [BaseService],
  exports: [BaseService],
})
export class ShareModule {}
