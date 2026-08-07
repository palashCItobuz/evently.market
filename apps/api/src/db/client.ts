import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { ENV } from './env.js';

const sql = postgres(ENV.DATABASE_URL, {
  host: undefined,
});

export const db = drizzle(sql);
