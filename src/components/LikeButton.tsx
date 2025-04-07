"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
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
    const fetchLikedStatus = async () => {
      if (session) {
        try {
          const response = await fetch(`/api/likes/status?postId=${postId}&userId=${session.user.id}`);
          const data = await response.json();
          setLiked(data.liked);
        } catch (error) {
          console.error('Error fetching liked status:', error);
        }
      }
    };

    fetchLikedStatus();
  }, [session, postId]);

  const handleLike = async () => {
    if (session) {
      try {
        const like = await createLike(postId, session.user.id);
        if (like) {
          setLiked(true);
          setLikeCount(likeCount + 1);
        }
      } catch (error) {
        console.error('Error liking the post:', error);
      }
    }
  };

  const handleUnlike = async () => {
    if (session) {
      try {
        const removed = await removeLike(postId, session.user.id);
        if (removed) {
          setLiked(false);
          setLikeCount(likeCount - 1);
        }
      } catch (error) {
        console.error('Error unliking the post:', error);
      }
    }
  };

  return (
    <Button
      variant="contained"
      color={liked ? 'error' : 'primary'}
      onClick={liked ? handleUnlike : handleLike}
    >
      {liked ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
      <span style={{ marginLeft: '8px' }}>{likeCount}</span>
    </Button>
  );
};

export default LikeButton;