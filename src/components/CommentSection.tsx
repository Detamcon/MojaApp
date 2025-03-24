"use client";

import { useState, useEffect } from "react";
import { IconButton, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button, Box } from "@mui/material";
import { Send } from "@mui/icons-material"; 

export default function CommentSection({ postId }: { postId: string }) {
  const [comments, setComments] = useState<{ id: string; content: string; user: { name: string } }[]>([]);
  const [newComment, setNewComment] = useState("");
  const [open, setOpen] = useState(false); 

  useEffect(() => {
    fetch(`/api/comments?postId=${postId}`)
      .then((res) => res.json())
      .then(setComments);
  }, [postId]);

  const submitComment = async () => {
    if (!newComment.trim()) return;

    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ postId, content: newComment }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      const comment = await res.json();
      setComments((prev) => [comment, ...prev]);
      setNewComment("");
      setOpen(false); 
    }
  };

  return (
    <div style={{ marginTop: "10px", textAlign: "left" }}>
      <h4>Comments</h4>

      <TextField
        label="Add a comment..."
        variant="outlined"
        fullWidth
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
      <IconButton onClick={submitComment} color="primary">
        <Send /> 
      </IconButton>

      <Box sx={{ marginTop: 2 }}>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          Add Comment
        </Button>
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add a Comment</DialogTitle>
        <DialogContent>
          <TextField
            label="Your Comment"
            variant="outlined"
            fullWidth
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={submitComment} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {comments.map((comment) => (
        <div key={comment.id} style={{ borderBottom: "1px solid #ddd", padding: "5px 0" }}>
          <strong>{comment.user.name}:</strong> {comment.content}
        </div>
      ))}
    </div>
  );
}
