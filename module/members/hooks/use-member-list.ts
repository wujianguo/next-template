import { request } from "@/lib/request"
import useSWR from "swr"
import { z } from "zod"
import { MemberSchema } from "../dto/member.dto"

export function useMemberList() {
  return useSWR("/api/teams/xyz/users", (url) => request(url, z.array(MemberSchema)))
}
