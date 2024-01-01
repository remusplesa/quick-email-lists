import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubscribersModule } from './subscribers/subscribers.module';
import { DrizzleService } from './db/db.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [SubscribersModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, DrizzleService],
})
export class AppModule {}
