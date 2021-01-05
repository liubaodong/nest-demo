import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  findNews() {
    return {
      success: true,
    };
  }
}
