import { Injectable } from '@nestjs/common';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { VerifySubscriberDto } from './dto/verify-subscriber.dto';
import { DrizzleService } from 'src/db/db.service';
import { subscribers, scopes } from 'src/db/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class SubscribersService {
  constructor(public drizzleService: DrizzleService) { }

  async create(createSubscriberDto: CreateSubscriberDto) {
    console.log({ createSubscriberDto });
    const { scope } = createSubscriberDto;

    const dbScope = await this.drizzleService.db
      .select()
      .from(scopes)
      .where(eq(scopes.name, scope));

    if (dbScope[0].id) {
      const user = await this.drizzleService.db
        .insert(subscribers)
        .values({ ...createSubscriberDto, scopeId: dbScope[0].id });

      return user;
    } else {
      throw new Error('Scope not found');
    }
  }

  async findAll() {
    console.log(JSON.stringify({ db: this.drizzleService.db }));

    const emails = await this.drizzleService.db
      .select()
      .from(subscribers)
      .leftJoin(scopes, eq(subscribers.scopeId, scopes.id));

    return emails;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscriber`;
  }

  async verify(id: number, verifySubscriberDto: VerifySubscriberDto) {
    const { isVerified } = verifySubscriberDto;

    const updated = await this.drizzleService.db
      .update(subscribers)
      .set({ isVerified: isVerified ? 1 : 0 })
      .where(eq(subscribers.id, id));

    return updated;
  }

  remove(id: number) {
    return `This action removes a #${id} subscriber`;
  }
}
