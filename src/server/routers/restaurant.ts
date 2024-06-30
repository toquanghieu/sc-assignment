import { router, publicProcedure } from '../trpc';
import type { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { prisma } from '~/server/prisma';

/**
 * Default selector for Restaurant.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @link https://github.com/prisma/prisma/issues/9353
 */
const defaultRestaurantSelect = {
  id: true,
  name: true,
  desc: true,
  images: true,
  category: true,
  city: true,
  priceRange: true,
  isFavourite: true,
  featured: true,
  rating: true,
  ratingCount: true,
} satisfies Prisma.restaurantSelect;

export const restaurantRouter = router({
  getRestaurants: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
        search: z.string().nullish(),
        categoryId: z.string().nullish(),
      }),
    )
    .query(async ({ input }) => {
      /**
       * For pagination docs you can have a look here
       * @link https://trpc.io/docs/v11/useInfiniteQuery
       * @link https://www.prisma.io/docs/concepts/components/prisma-client/pagination
       */

      const limit = input.limit ?? 50;
      const { cursor } = input;
      const queryOptions: any = {
        select: defaultRestaurantSelect,
        take: limit + 1,
        where: {},
        cursor: cursor
          ? {
              id: cursor,
            }
          : undefined,
        orderBy: {
          createdAt: 'desc',
        },
      };
      if (input.categoryId !== 'ALL') {
        queryOptions.where = {
          categoryId: input.categoryId,
        };
      }
      if (input.search && input.search.trim().length > 0) {
        queryOptions.where = {
          ...queryOptions.where,
          OR: [
            {
              name: { contains: input.search },
            },
            {
              desc: { contains: input.search },
            },
          ],
        };
      }
      const items = await prisma.restaurant.findMany(queryOptions);
      let nextCursor: typeof cursor | undefined = undefined;
      if (items.length > limit) {
        // Remove the last item and use it as next cursor
        const nextItem = items.pop()!;
        nextCursor = nextItem.id;
      }

      return {
        items: items.reverse(),
        nextCursor,
      };
    }),
  addFavorite: publicProcedure
    .input(
      z.object({
        id: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const restaurant = await prisma.restaurant.findUnique({
        where: { id: input.id },
        select: { id: true },
      });
      if (!restaurant) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No restaurant with id '${input.id}'`,
        });
      }
      return prisma.restaurant.update({
        where: { id: input.id },
        data: { isFavourite: true },
      });
    }),
});
