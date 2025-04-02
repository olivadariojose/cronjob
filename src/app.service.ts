import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

const ten_minutes='*/10 * * * *'

@Injectable()
export class AppService {


  @Cron(ten_minutes)
  async keepAppAwake(): Promise<void> {
    try {
      for (const url of process.env.ENDPOINTS?.split(',') || []) {
        await fetch(url)
      }
    } catch (error) {
      console.error('Error keeping app awake:', error);
    }
  }
  
}
