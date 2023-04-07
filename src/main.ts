import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/app.module';

import { ConfigModule } from '@src/config/config.module';

const port = ConfigModule.port || 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
