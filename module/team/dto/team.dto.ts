import { z } from "zod";

export const TeamCreateSchema = z.object({
  name: z.string(),
  slug: z.string(),
});

export const TeamSchema = TeamCreateSchema.extend({
  // id: z.number(),
  icon: z.string(),
  createdAt: z.string().datetime(),
})

export type TeamDto = z.infer<typeof TeamSchema>
