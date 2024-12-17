import { request } from "@/lib/request";
import { LoginInput } from "../schemas";
import { UserDto, UserSchema } from "../dto/user.dto";

export async function login(params: LoginInput): Promise<UserDto> {
  return request("/api/auth/login", UserSchema, { method: "POST", body: JSON.stringify(params) });
}
