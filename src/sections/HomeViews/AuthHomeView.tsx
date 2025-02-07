'use client'

import { useSession } from "next-auth/react"
import { Typography } from '@mui/material'

export default function AuthHomeView() {
  const { data: session } = useSession()

  return (
    <div>
      <Typography variant="h4" component="div" gutterBottom>
        <strong>Welcome, {session?.user?.name}!</strong>
        <Typography variant="body1">
          It&apos;s great to see you again! Keep up with your friends, explore new communities, and stay updated on the latest trends.
        </Typography>
        <Typography variant="body1">
          🌍 <strong>Reconnect</strong> with your favorite people and groups. <br />
          📸 <strong>Share</strong> your latest moments and experiences. <br />
          💬 <strong>Engage</strong> in meaningful conversations and discussions. <br />
          🔎 <strong>Discover</strong> fresh content tailored just for you.
        </Typography>
        <Typography variant="body1">
          Dive back into the conversations, explore trending topics, and make your voice heard. Your community is waiting!
        </Typography>
        <Typography variant="h6" color="primary">
          🚀 Start exploring now!
        </Typography>
      </Typography>

    </div>
  )
}