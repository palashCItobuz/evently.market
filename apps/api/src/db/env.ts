import dotenv from 'dotenv';
import { URL } from 'node:url';
import path from 'node:path';

const envPath = path.resolve(process.cwd(), '.env');

dotenv.config({ path: envPath });

const required = ['DATABASE_URL'] as const;

type RequiredEnvKey = (typeof required)[number];

function missingEnv(key: RequiredEnvKey): never {
  throw new Error(`Missing required environment variable: ${key}`);
}

function invalidEnv(key: RequiredEnvKey, message: string): never {
  throw new Error(`Invalid environment variable ${key}: ${message}`);
}

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) missingEnv('DATABASE_URL');

let parsed: URL;
try {
  parsed = new URL(databaseUrl as string);
} catch (err) {
  invalidEnv('DATABASE_URL', 'must be a valid URL');
}

if (parsed.protocol !== 'postgres:' && parsed.protocol !== 'postgresql:') {
  invalidEnv('DATABASE_URL', 'must use postgres:// or postgresql:// scheme');
}

const acceptedDbNames = new Set(['event_marketplace', 'event-marketplace']);
if (!acceptedDbNames.has(parsed.pathname.replace(/^\//, ''))) {
  invalidEnv(
    'DATABASE_URL',
    'database name must be event_marketplace or event-marketplace'
  );
}

export const ENV = {
  DATABASE_URL: databaseUrl as string,
};
