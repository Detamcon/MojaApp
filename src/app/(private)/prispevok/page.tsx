import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { fetchPosts } from '@/app/actions/posts'; // Import the fetchPosts function
import LikeButton from '@/components/LikeButton';
import CommentSection from '@/components/CommentSection';
import BookmarkButton from '@/components/BookmarkButton';

export const metadata = { title: "Zoznam prispevkov | MojaAppl" };

export default async function PostsList() {
  // Fetch posts from the database
  const posts = await fetchPosts();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Center content vertically
        minHeight: '100vh', // Ensure the container takes the full height of the viewport
        padding: '20px', // Add some padding
      }}
    >
      <Typography variant='h1' sx={{ marginBottom: '20px' }}>Zoznam prispevkov</Typography>
      <Box
        sx={{
          width: '100%',
          maxWidth: '600px', // Limit the width of the posts for better readability
        }}
      >
        {posts.map((post) => (
          <Box
            key={post.id}
            sx={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'center',
              backgroundColor: 'background.paper',
              marginBottom: '20px', 
            }}
          >
            <Typography variant='h5' sx={{ marginBottom: '10px' }}>{post.caption}</Typography>

            {/* Render Image Only if imageUrl is present */}
            {post.imageUrl ? (
              <img
                src={post.imageUrl} // Ensure this is a valid URL
                alt={post.caption || "Post Image"}
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
              />
            ) : (
              <Typography variant='body2' sx={{ marginTop: '10px' }}>No image available</Typography>
            )}

            <Typography variant='body2' sx={{ marginTop: '10px' }}>
              Posted by: {post.user?.name}
            </Typography>
            <Typography variant='body2'>
              Created at: {new Date(post.createdAt).toLocaleDateString()}
            </Typography>
            <LikeButton postId={post.id} likes={post.likes.length} />
            <BookmarkButton postId={post.id} />
            <CommentSection postId={post.id} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
