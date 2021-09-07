import fp from 'fastify-plugin';
import mongoose from 'mongoose';

export default fp(async () => {
  mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@landofhop-ku9ye.mongodb.net/landofhop`,
  );
});
