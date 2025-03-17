import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

export const createLike = async (postId: string, userId: string) => {
  try {
    console.log("Creating like for postId:", postId, "and userId:", userId);

    const like = await prisma.like.create({
      data: {
        postId,
        userId,
      },
    });

    return like;
  } catch (error: any) {
    console.error("Error creating like:", error?.message || error);
    throw new Error(error?.message || "Failed to create like");
  }
};