"use server";
import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

export const removeLike = async (postId: string, userId: string) => {
    try {
      const like = await prisma.like.findFirst({
        where: {
          postId,
          userId,
        },
      });
  
      if (like) {
        await prisma.like.delete({
          where: {
            id: like.id,
          },
        });
      }
  
      return true;
    } catch (error) {
      console.error('Error removing like:', error);
      throw new Error('Failed to remove like');
    }
  };