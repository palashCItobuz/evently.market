import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema/index.ts',
  driver: 'pg',
} satisfies Config;
