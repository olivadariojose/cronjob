import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

const ten_minutes='*/10 * * * *'
const endponts = [
  '',
  '',
]

@Injectable()
export class AppService {


  @Cron(ten_minutes)
  keepAppAwake(): string {
    return 'Hello World!';
  }


  
}
