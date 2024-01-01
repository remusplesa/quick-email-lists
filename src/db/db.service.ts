import { Injectable, OnModuleInit } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as Database from 'better-sqlite3';

@Injectable()
export class DrizzleService implements OnModuleInit {
  public db: Database;

  async onModuleInit() {
    const sqlite = new Database('drizzle/sqlite.db');
    this.db = drizzle(sqlite);
  }
}
