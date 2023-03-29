import { createTRPCRouter, publicProcedure } from "@component/server/api/trpc";

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),

  // create: publicProcedure.input(content).mutation(async ({ ctx }) => {
  //   const post = await ctx.prisma.post.create({
  //     data: {
  //       content: Input.content,
  //     },
  //   });

  //   return post;
  // }),
});
