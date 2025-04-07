import { NextResponse } from 'next/server';
import { prisma } from '@/app/api/auth/[...nextauth]/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get('postId');
  const userId = searchParams.get('userId');

  if (!postId || !userId) {
    return NextResponse.json({ error: 'Missing postId or userId' }, { status: 400 });
  }

  try {
    const like = await prisma.like.findFirst({
      where: { postId, userId },
    });

    return NextResponse.json({ liked: !!like });
  } catch (error) {
    console.error('Error fetching liked status:', error);
    return NextResponse.json({ error: 'Failed to fetch liked status' }, { status: 500 });
  }
}
