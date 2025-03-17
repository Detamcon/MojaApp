"use client";

import { useState } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { createPost } from '@/app/actions/posts';


export default function AddPost() {
  const [caption, setCaption] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { data: session } = useSession();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Session:', session)
    try {
      if (session && session.user) {
        await createPost(session.user.id, imageUrl, caption);
        router.push('/prispevok');
      } else {
        console.error('No user session found');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <Typography variant="h1">Pridanie prispevka</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Caption"
          value={caption}
          onChange={(event) => setCaption(event.target.value)}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          label="Image URL"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          sx={{ marginBottom: '20px' }}
        />
        <Button variant="contained" type="submit">
          Pridať prispevok
        </Button>
      </form>
    </Box>
  );
}