import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    accessToken: "accessToken",
    refreshToken: "refreshToken",
    userId: "123",
  });
}
