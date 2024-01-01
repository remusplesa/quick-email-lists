import {
  sqliteTable,
  integer,
  text,
} from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const scopes = sqliteTable('scopes', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
});

export const subscribers = sqliteTable('subscribers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull(),
  scopeId: integer('scopeId').references(() => scopes.id),
  createdAt: text('createdAt')
    .default(sql`CURRENT_TIMESTAMP`),
  isVerified: integer('isVerified').default(0),
});
