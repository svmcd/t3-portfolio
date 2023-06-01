import { createTRPCRouter, publicProcedure } from "@component/server/api/trpc";
import { z } from "zod";

export const projectsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.project.findMany({
      orderBy: [{ date: "desc" }],
    });
  }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string().optional(),
        content: z.string().optional(),
        technologies: z.string().optional(),
        date: z.string().optional(),
        link1: z.string().optional(),
        link2: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const project = await ctx.prisma.project.create({
        data: input,
      });

      return project;
    }),
});
