/// <reference types="node" />
import dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';
import path from 'node:path';

const environment = process.env.NODE_ENV || 'development';
const envPath = path.resolve(`./apps/api/.env.${environment}`);

dotenv.config({ path: envPath });

export default {
  schema: './src/db/schema/index.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
