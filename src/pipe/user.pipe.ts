import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { ObjectSchema } from '@hapi/joi';
@Injectable()
export class UserPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}
  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);
    if (error) return { success: false };
    value.id = '666';
    console.log('user 管道');
    return value;
  }
}
