import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, postId, bookmarked } = JSON.parse(req.body);

    try {
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

      res.status(200).json({ message: 'Bookmark updated' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update bookmark' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
