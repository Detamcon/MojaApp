import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

export const createLike = async (postId: string, userId: string) => {
  try {
    const like = await prisma.like.create({
      data: {
        postId,
        userId,
      },
    });
    return like;
  } catch (error) {
    console.error('Error creating like:', error);
    throw new Error('Failed to create like');
  }
};