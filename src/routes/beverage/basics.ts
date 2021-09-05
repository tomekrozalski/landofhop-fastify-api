import { FastifyPluginAsync } from 'fastify';

import { getBeverage } from '@/controllers/beverage.controller';

const basics: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/basics', getBeverage);
};

export default basics;
