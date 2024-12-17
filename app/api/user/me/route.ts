import { NextResponse } from "next/server";

export async function GET() {
  const user = {
    id: "1",
    name: "Alice",
    avatar: "https://avatars.githubusercontent.com/u/1024025?v=4",
    email: "lsjustin89@gmail.com",
  };
  return NextResponse.json(user);
}
