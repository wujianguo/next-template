import { request } from "@/lib/request";
import { LoginInput } from "../schemas";
import { UserDto, UserSchema } from "../dto/user.dto";
import { z } from "zod";

export function defaultUser(): UserDto {
  return {
    id: '',
    name: '',
    avatar: '',
    email: '',
  };
}

export function getUserFromLocal(): UserDto | null {
  const accessToken = localStorage.getItem("accessToken");
  const user = localStorage.getItem("user");
  if (accessToken && user) {
    try {
      return UserSchema.parse(JSON.parse(user));
    } catch (error) {
      console.error('parse local user error ', error);
      return defaultUser();
    }
  }
  return null;
}

export function getAccessTokenFromLocal(): string | null {
  return localStorage.getItem("accessToken");
}

export function setAccessTokenToLocal(accessToken: string): void {
  localStorage.setItem("accessToken", accessToken);
}

export function setUserToLocal(user: UserDto): void {
  localStorage.setItem("user", JSON.stringify(user));
}

export function fetchCurrentUser(): Promise<UserDto> {
  return request("/api/user/me", UserSchema);
}

export async function login(params: LoginInput): Promise<UserDto> {
  const data = await request("/api/auth/login", z.object({ accessToken: z.string() }), { method: "POST", body: JSON.stringify(params) });
  setAccessTokenToLocal(data.accessToken);
  return fetchCurrentUser();
}

export async function logout(): Promise<void> {
  try {
    await request("/api/auth/logout", z.any(), { method: "POST" });
  } catch (error) {
    console.error("logout error", error);
  }
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
}
