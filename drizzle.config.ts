import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: './src/db/schema.ts',
  driver: 'better-sqlite',
  dbCredentials: {
    url: './drizzle/sqlite.db',
  },
  verbose: true,
  strict: true,
  out: 'drizzle/migrations',
});
