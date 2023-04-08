import { Module } from '@nestjs/common';
import { UserModule } from '@src/user/user.module';
import { ConfigModule } from '@src/config/config.module';

@Module({
  imports: [UserModule, ConfigModule],
})
export class AppModule {}
