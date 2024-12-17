import { request } from "@/lib/request"
import useSWR from "swr"
import { z } from "zod"
import { TeamSchema } from "../dto/team.dto"

export function useTeamList() {
  return useSWR("/api/teams", (url) => request(url, z.array(TeamSchema)))
}
