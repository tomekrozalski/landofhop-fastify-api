import { FastifyPluginAsync } from 'fastify';

const basics: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/basics', async function (request, reply) {
    //     const beverages = this.mongo.client.db('landofhop').collection('beverages');
    //
    //     beverages.findOne({}, (err, user) => {
    //       if (err) {
    //         reply.send(err);
    //
    //         return;
    //       }
    //       reply.send(user);
    //     });

    return { test: true };
  });
};

export default basics;
