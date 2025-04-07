"use server";

import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

export const createLike = async (postId: string, userId: string) => {
  try {
    console.log("Creating like for postId:", postId, "and userId:", userId);

    // Check if post exists
    const post = await prisma.post.findUnique({ where: { id: postId } });
    if (!post) {
      console.error("Post not found for id:", postId);
      throw new Error("Post not found");
    }

    // Check if user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      console.error("User not found for id:", userId);
      throw new Error("User not found");
    }

    const like = await prisma.like.create({
      data: {
        postId,
        userId,
      },
    });

    console.log("Like created:", like);
    return like;
  } catch (error: unknown) {
    const errorMessage = (error as Error)?.message || "Failed to create like";
    console.error("Error creating like:", errorMessage);
    throw new Error(errorMessage);
  }
};
