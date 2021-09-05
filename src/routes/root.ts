import { FastifyPluginAsync } from 'fastify';

const root: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.post<{ Body: any }>('/', async function (request, reply) {
    fastify.log.info(JSON.stringify(request.body));

    reply.send({ hello: 'world' });
  });
};

export default root;
