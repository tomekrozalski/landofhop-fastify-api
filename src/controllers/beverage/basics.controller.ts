import { FastifyReply, FastifyRequest } from 'fastify';
import { isEmpty, unset } from 'lodash';

import Beverage from '@/models/Beverage/Beverage';
import { institution as institutionAggregation } from './aggregations';

const getBasics = async (
  req: FastifyRequest<{
    Params: {
      language: string;
      limit: string;
      skip: string;
    };
  }>,
  reply: FastifyReply,
) => {
  const { language, limit, skip } = req.params;

  console.log({ language });

  const rawBeverage = await Beverage.aggregate([
    ...institutionAggregation,
    {
      $project: {
        _id: 0,
        id: '$_id',
        shortId: 1,
        badge: 1,
        brand: {
          badge: '$label.general.brand_info.badge',
          name: '$label.general.brand_info.name',
        },
        name: '$label.general.name',
        photos: {
          cover: {
            height: '$editorial.photos.cover.height',
            width: '$editorial.photos.cover.width',
          },
          outlines: {
            cover: '$editorial.photos.outlines.cover',
          },
        },
        container: {
          type: '$label.container.type',
        },
        added: 1,
      },
    },
    { $sort: { added: -1 } },
    { $skip: +skip },
    { $limit: +limit },
  ]);

  const formattedBeverage = rawBeverage.map(({ added, badge, brand, container, id, name, photos, shortId }) => {
    function translate(a: any) {
      console.log({ a });

      return { BUM: true };
    }

    const formatted = {
      id,
      shortId,
      badge,
      brand: {
        badge: brand.badge,
        name: translate(brand.name),
      },
      name: translate(name),
      photos,
      container,
      added,
    };

    if (isEmpty(formatted.photos.cover)) {
      unset(formatted, 'photos.cover');
    }

    if (isEmpty(formatted.photos.outlines)) {
      unset(formatted, 'photos.outlines');
    }

    if (isEmpty(formatted.photos)) {
      unset(formatted, 'photos');
    }

    return formatted;
  });

  reply.send(formattedBeverage);
};

export default getBasics;
