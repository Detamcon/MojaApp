import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
  const { userId } = params;

  try {
    const bookmarks = await prisma.post.findMany({
      where: {
        bookmarkedBy: {
          some: {
            id: userId,
          },
        },
      },
      include: {
        user: true, // Include user details for each post
      },
    });

    return NextResponse.json({ bookmarks });
  } catch (error) {
    console.error("Error fetching user bookmarks:", error);
    return NextResponse.json({ error: "Failed to fetch bookmarks" }, { status: 500 });
  }
}
