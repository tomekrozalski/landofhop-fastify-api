import { FastifyPluginAsync } from 'fastify';
import { getBasics } from '@/controllers/beverage';

const basics: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/basics/:language/:skip/:limit', getBasics);
};

export default basics;
