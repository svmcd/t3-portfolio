import { createTRPCRouter, publicProcedure } from "@component/server/api/trpc";
import { z } from "zod";

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany({
      orderBy: [{ year: "desc" }],
    });
  }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string().optional(),
        content: z.string().optional(),
        imageUrl: z.string().optional(),
        technologies: z.string().optional(),
        year: z.string().optional(),
        link1: z.string().optional(),
        link2: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.prisma.post.create({
        data: input,
      });

      return post;
    }),
});
