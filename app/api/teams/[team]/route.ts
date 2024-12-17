import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { team: string } }) {
  const url = `https://jsonplaceholder.typicode.com/photos/${params.team}`;
  const response = await fetch(url);
  const team: { id: number, title: string, thumbnailUrl: string } = await response.json();
  return NextResponse.json({
    slug: `${team.id}`,
    name: team.title.split(" ")[0],
    icon: team.thumbnailUrl,
    createdAt: new Date().toISOString(),
  });
}
