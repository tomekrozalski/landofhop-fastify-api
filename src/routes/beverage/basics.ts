import { FastifyPluginAsync } from 'fastify';

import { getBasics } from '@/controllers/beverage';
import { Basics as BasicsTypes } from '@/utils/types/beverage';
// import type { QuerystringSchema as QuerystringSchemaTypes } from './types/querystring';
import QuerystringSchema from '@/utils/schemas/querystring.json';

const basics: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get<{
    Body: BasicsTypes[];
    // Querystring: QuerystringSchemaTypes;
  }>(
    '/basics',
    {
      schema: {
        querystring: QuerystringSchema,
      },
    },
    getBasics,
  );
};

export default basics;
