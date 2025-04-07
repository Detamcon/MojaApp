"use client";
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { IconButton } from '@mui/material';
import { Bookmark, BookmarkBorder } from '@mui/icons-material';

interface BookmarkButtonProps {
  postId: string;
}

const BookmarkButton = ({ postId }: BookmarkButtonProps) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    if (userId) {
      const fetchBookmarkStatus = async () => {
        try {
          const response = await fetch(`/api/bookmark/status?userId=${userId}&postId=${postId}`);
          const data = await response.json();
          setBookmarked(data.bookmarked);
        } catch (error) {
          console.error('Error fetching bookmark status:', error);
        }
      };

      fetchBookmarkStatus();
    }
  }, [userId, postId]);

  const handleBookmarkChange = async () => {
    if (!userId) return;

    try {
      const response = await fetch('/api/bookmark', {
        method: 'POST',
        body: JSON.stringify({ userId, postId, bookmarked: !bookmarked }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        setBookmarked(!bookmarked);
      } else {
        console.error('Failed to update bookmark');
      }
    } catch (error) {
      console.error('Error updating bookmark:', error);
    }
  };

  return (
    <IconButton
      onClick={handleBookmarkChange}
      color={bookmarked ? 'primary' : 'default'}
      aria-label={bookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
    >
      {bookmarked ? <Bookmark /> : <BookmarkBorder />}
    </IconButton>
  );
};

export default BookmarkButton;
