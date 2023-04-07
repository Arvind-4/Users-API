import { Module } from '@nestjs/common';
import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';
import { UserModule } from '@src/user/user.module';
import { ConfigModule } from '@src/config/config.module';

@Module({
  imports: [UserModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
