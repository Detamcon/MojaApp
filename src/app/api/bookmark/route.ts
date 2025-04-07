import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

export async function POST(req: NextRequest) {
  try {
    const { userId, postId, bookmarked } = await req.json();

    if (bookmarked) {
      // Add post to user's bookmarks
      await prisma.user.update({
        where: { id: userId },
        data: {
          bookmarks: {
            connect: { id: postId },
          },
        },
      });
    } else {
      // Remove post from user's bookmarks
      await prisma.user.update({
        where: { id: userId },
        data: {
          bookmarks: {
            disconnect: { id: postId },
          },
        },
      });
    }

    return NextResponse.json({ message: 'Bookmark updated' });
  } catch (error) {
    console.error('Error updating bookmark:', error);
    return NextResponse.json({ error: 'Failed to update bookmark' }, { status: 500 });
  }
}
