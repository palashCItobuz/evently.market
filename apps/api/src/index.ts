import Fastify from 'fastify';

const port = process.env.PORT || 3000;

const fastify = Fastify({
  logger: true
});

// Declare a base route
fastify.get('/', async (request, reply) => {
  return { hello: 'world from event-marketplace api!' };
});

// Run the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log(`Server is running on http://localhost:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();