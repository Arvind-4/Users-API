import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  public constructor() {
    super();
    console.log('🔶 New Database Instance Created!!');
  }
  async onModuleInit() {
    try {
      await this.$connect();
      console.log('✅ Connected to Database');
    } catch (err) {
      console.log('❌ Could not connect to Database\n%o', err);
    }
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
