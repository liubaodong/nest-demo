import { Module } from '@nestjs/common';
import { ShareModule } from '../share/share.module';

@Module({
  imports: [ShareModule],
})
export class DefaultModule {}
