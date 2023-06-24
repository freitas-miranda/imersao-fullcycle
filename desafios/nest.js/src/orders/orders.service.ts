import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma/prisma.service';
import { CreateOrderDto } from './order.dto';
import { OrderStatus } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  all() {
    return this.prismaService.order.findMany();
  }

  create(data: CreateOrderDto) {
    return this.prismaService.order.create({
      data: {
        asset_id: data.asset_id,
        price: data.price,
        status: OrderStatus.PENDING,
      },
    });
  }
}
