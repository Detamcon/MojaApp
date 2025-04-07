"use client";

import { useState } from 'react';
import { Typography, Box, Button, TextField, Card, CardContent, CardActions } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { createPost } from '@/app/actions/posts';

export default function AddPost() {
  const [caption, setCaption] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null); // New state for file name
  const { data: session } = useSession();
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
      setFileName(event.target.files[0].name); // Set the file name
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      let imageUrl = '';
      if (imageFile) {
        const formData = new FormData();
        formData.append('file', imageFile);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          imageUrl = data.url;
        } else {
          console.error('Failed to upload image');
          return;
        }
      }

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
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '20px',
      }}
    >
      <Card sx={{ maxWidth: 500, width: '100%', boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            Pridanie prispevka
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Caption"
              value={caption}
              onChange={(event) => setCaption(event.target.value)}
              fullWidth
              sx={{ marginBottom: '20px' }}
            />
            <Button
              variant="contained"
              component="label"
              fullWidth
              sx={{ marginBottom: '10px' }}
            >
              Nahrať obrázok
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleFileChange}
              />
            </Button>
            {fileName && ( // Display the file name if a file is selected
              <Typography variant="body2" sx={{ marginBottom: '20px', color: 'gray' }}>
                Nahraný súbor: {fileName}
              </Typography>
            )}
            <CardActions>
              <Button variant="contained" type="submit" fullWidth>
                Pridať prispevok
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}