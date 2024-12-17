import { z } from "zod"

export const MemberSchema = z.object({
  id: z.number(),
  name: z.string(),
  bio: z.string(),
  avatar: z.string(),
  createdAt: z.string().datetime(),
})

export type MemberDto = z.infer<typeof MemberSchema>
