import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Button, Typography } from '@mui/material';
import { createLike } from '@/app/actions/createLike';
import { removeLike } from '@/app/actions/removeLike';

interface LikeButtonProps {
  postId: string;
  likes: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ postId, likes }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      // Check if the user has already liked the post
      // You can use a query to check if the user is in the likedBy array
      // For simplicity, we'll assume the user has not liked the post
      setLiked(false);
    }
  }, [session]);

  const handleLike = async () => {
    if (session) {
      // Create a new like
      const like = await createLike(postId, session.user.id);
      if (like) {
        setLiked(true);
        setLikeCount(likeCount + 1);
      }
    }
  };

  const handleUnlike = async () => {
    if (session) {
      // Remove the like
      const removed = await removeLike(postId, session.user.id);
      if (removed) {
        setLiked(false);
        setLikeCount(likeCount - 1);
      }
    }
  };

  return (
    <Button
      variant="contained"
      color={liked ? 'error' : 'primary'}
      onClick={liked ? handleUnlike : handleLike}
    >
      <Typography variant="body1">
        {liked ? 'Unlike' : 'Like'}
      </Typography>
      <Typography variant="body1" sx={{ ml: 1 }}>
        {likeCount}
      </Typography>
    </Button>
  );
};

export default LikeButton;