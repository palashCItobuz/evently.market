import { db } from './db/client';
import { sql } from 'drizzle-orm';
import Fastify from 'fastify';

const parsedPort = Number(process.env.PORT);
const port = process.env.PORT && !Number.isNaN(parsedPort) ? parsedPort : 3000;

const fastify = Fastify({
  logger: true
});

// Declare a base route
fastify.get('/', async (request, reply) => {
  try {
    const result = await db.execute(sql`SELECT 1 AS ok`);
    console.log(result);
    return { hello: 'world from event-marketplace api!' };
  } catch (error) {
    console.error('Error executing query:', error);
    reply.status(500).send({ error: 'Internal 2 Server Error' });
  }
});

// Run the server
const start = async () => {
  try {
    await fastify.listen({ port, host: '0.0.0.0' });
    console.log(`Server is running on http://localhost:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();