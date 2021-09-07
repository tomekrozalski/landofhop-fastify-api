import { FastifyReply, FastifyRequest } from 'fastify';
// import Beverage from '@/models/Beverage/Beverage';
// import { institution as institutionAggregation } from './aggregations';

const getBasics = async (req: FastifyRequest, reply: FastifyReply) => {
  console.log('props', req.params);
  // const { language, limit, skip } = req.params;

  // const beverage = await Beverage.aggregate([
  //   ...institutionAggregation,
  //   {
  //     $project: {
  //       _id: 0,
  //       id: '$_id',
  //       shortId: 1,
  //       badge: 1,
  //       brand: {
  //         badge: '$label.general.brand_info.badge',
  //         name: '$label.general.brand_info.name',
  //       },
  //       name: '$label.general.name',
  //       photos: {
  //         cover: {
  //           height: '$editorial.photos.cover.height',
  //           width: '$editorial.photos.cover.width',
  //         },
  //         outlines: {
  //           cover: '$editorial.photos.outlines.cover',
  //         },
  //       },
  //       container: {
  //         type: '$label.container.type',
  //       },
  //       added: 1,
  //     },
  //   },
  //   { $sort: { added: -1 } },
  //   // { $skip: +skip },
  //   // { $limit: +limit },
  // ]);

  reply.send({ test: true });
};

export default getBasics;
