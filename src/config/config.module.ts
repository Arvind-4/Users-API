import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({})
export class ConfigModule {
  static port = process.env.PORT;
  static jwtSecret = process.env.JWT_SECRET;
}
