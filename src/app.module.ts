import { Module } from '@nestjs/common';
import { UserModule } from '@src/user/user.module';
import { ConfigModule } from '@src/config/config.module';
import { HomeModule } from '@src/home/home.module';

@Module({
  imports: [UserModule, ConfigModule, HomeModule],
})
export class AppModule {}
