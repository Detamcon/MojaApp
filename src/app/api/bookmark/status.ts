import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { userId, postId } = req.query;

    try {
      const user = await prisma.user.findUnique({
        where: { id: userId as string },
        select: {
          bookmarks: {
            where: { id: postId as string },
          },
        },
      });

      const isBookmarked = Array.isArray(user?.bookmarks) && user.bookmarks.length > 0; // Ensure bookmarks is an array
      res.status(200).json({ bookmarked: isBookmarked });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch bookmark status' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
