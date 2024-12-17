import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const page = searchParams.get('page') || 1;
  const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}`;
  const response = await fetch(url);
  const body: {id: number, title: string, thumbnailUrl: string}[] = await response.json();
  const users = body.map((user) => ({
    id: user.id,
    name: user.title.split(" ")[0],
    bio: user.title,
    avatar: user.thumbnailUrl,
    createdAt: new Date().toISOString(),
  }));
  return NextResponse.json(users);
}
