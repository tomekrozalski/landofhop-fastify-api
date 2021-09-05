import fp from 'fastify-plugin';
import env, { fastifyEnvOpt } from 'fastify-env';

export default fp<fastifyEnvOpt>(async (fastify) => {
  fastify.register(env, {
    dotenv: true,
    schema: {
      type: 'object',
      properties: {
        AWS_ACCESS_KEY_ID: {
          type: 'string',
          default: '',
        },
        AWS_SECRET_ACCESS_KEY: {
          type: 'string',
          default: '',
        },
        IMAGES_SERVER: {
          type: 'string',
          default: '',
        },
        JWT_SECRET: {
          type: 'string',
          default: '',
        },
        MONGODB_USERNAME: {
          type: 'string',
          default: '',
        },
        MONGODB_PASSWORD: {
          type: 'string',
          default: '',
        },
        PORT: {
          type: 'number',
          default: '5000',
        },
      },
      required: [
        'AWS_ACCESS_KEY_ID',
        'AWS_SECRET_ACCESS_KEY',
        'IMAGES_SERVER',
        'JWT_SECRET',
        'MONGODB_USERNAME',
        'MONGODB_PASSWORD',
        'PORT',
      ],
    },
  });
});

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      AWS_ACCESS_KEY_ID: string;
      AWS_SECRET_ACCESS_KEY: string;
      IMAGES_SERVER: string;
      JWT_SECRET: string;
      MONGODB_USERNAME: string;
      MONGODB_PASSWORD: string;
      PORT: string;
    };
  }
}
