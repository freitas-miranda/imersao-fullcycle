import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AssetsModule } from './assets/assets.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [PrismaModule, AssetsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
