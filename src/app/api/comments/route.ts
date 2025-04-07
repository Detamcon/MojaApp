import { NextResponse } from "next/server";
import { prisma } from "@/app/api/auth/[...nextauth]/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  
    const { postId, content } = await req.json();
  
    // Create the comment and include the user relation
    const comment = await prisma.comment.create({
      data: {
        postId,
        userId: session.user.id,
        content,
      },
      include: {
        user: true,  // Include the user data in the response
      },
    });
  
    return NextResponse.json(comment);
  }
  
  

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get("postId");

  if (!postId) return NextResponse.json({ error: "Post ID is required" }, { status: 400 });

  const comments = await prisma.comment.findMany({
    where: { postId },
    include: { user: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(comments);
}
