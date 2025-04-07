import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  const postId = searchParams.get('postId');

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId as string },
      select: {
        bookmarks: {
          where: { id: postId as string },
        },
      },
    });

    const isBookmarked = user?.bookmarks?.length ?? 0 > 0;
    return NextResponse.json({ bookmarked: isBookmarked });
  } catch (error) {
    console.error('Error fetching bookmark status:', error);
    return NextResponse.json({ error: 'Failed to fetch bookmark status' }, { status: 500 });
  }
}
