import { request } from "@/lib/request"
import { UserSchema } from "../dto/user.dto"
import useSWR from "swr"

export function useCurrentUser() {
  return useSWR("/api/user/me", (url) => request(url, UserSchema));
}
