"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Typography, Box, Card, CardContent, CardMedia } from "@mui/material";

interface Bookmark {
  id: string;
  imageUrl?: string;
  caption?: string;
  user?: {
    name?: string;
  };
}

interface Post {
  id: string;
  imageUrl?: string;
  caption?: string;
  createdAt: string;
}

export default function ProfilePage() {
  const { data: session } = useSession();
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [posts, setPosts] = useState<Post[]>([]); // State for user's posts

  useEffect(() => {
    const fetchBookmarks = async () => {
      if (session?.user?.id) {
        try {
          const response = await fetch(`/api/bookmark/user/${session.user.id}`);
          const data = await response.json();
          setBookmarks(data.bookmarks);
        } catch (error) {
          console.error("Error fetching bookmarks:", error);
        }
      }
    };

    const fetchPosts = async () => {
      if (session?.user?.id) {
        try {
          const response = await fetch(`/api/posts/user/${session.user.id}`);
          const data = await response.json();
          setPosts(data.posts);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      }
    };

    fetchBookmarks();
    fetchPosts();
  }, [session]);

  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h4" gutterBottom>
        Vitajte, {session?.user?.name}!
      </Typography>

      <Typography variant="h6" gutterBottom>
        Vaše záložky:
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {bookmarks.length > 0 ? (
          bookmarks.map((post) => (
            <Card key={post.id} sx={{ maxWidth: 345 }}>
              {post.imageUrl && (
                <CardMedia
                  component="img"
                  height="140"
                  image={post.imageUrl}
                  alt={post.caption || "Bez popisu"}
                />
              )}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.caption || "Bez popisu"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Autor: {post.user?.name || "Neznámy"}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="body1">Nemáte žiadne záložky.</Typography>
        )}
      </Box>

      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Vaše príspevky:
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Card key={post.id} sx={{ maxWidth: 345 }}>
              {post.imageUrl && (
                <CardMedia
                  component="img"
                  height="140"
                  image={post.imageUrl}
                  alt={post.caption || "Bez popisu"}
                />
              )}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.caption || "Bez popisu"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Vytvorené: {new Date(post.createdAt).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="body1">Nemáte žiadne príspevky.</Typography>
        )}
      </Box>
    </Box>
  );
}
