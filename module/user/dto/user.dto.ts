import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  avatar: z.string().url(),
  email: z.string().email(),
});

export type UserDto = z.infer<typeof UserSchema>;
