import { FastifyPluginAsync } from 'fastify';

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post<{ Body: any }>('/', async function (request, reply) {
    fastify.log.info(JSON.stringify(request.body));

    return { root: true };
  });
};

export default root;
