import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "ok",
  }, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Expose-Headers": "*",
    },
  });
}
