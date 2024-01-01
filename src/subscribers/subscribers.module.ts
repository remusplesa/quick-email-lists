import { Module } from '@nestjs/common';
import { SubscribersService } from './subscribers.service';
import { SubscribersController } from './subscribers.controller';
import { DrizzleService } from 'src/db/db.service';

@Module({
  controllers: [SubscribersController],
  providers: [SubscribersService, DrizzleService],
  exports: [SubscribersService],
})
export class SubscribersModule {}
