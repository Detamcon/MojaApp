'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { 
  Button, 
  Card, 
  CardContent,  
  Typography, 
  Box
} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import Link from 'next/link'

export default function SignInPage() {
  const [error, setError] = useState('')
  const router = useRouter()

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const result = await signIn('credentials', {
        redirect: false,
      })

      if (result?.error) {
        setError('Invalid email or password')
      } else {
        router.push('/')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    }
  }

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/' })
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Card sx={{ maxWidth: 400, width: '100%' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            Sign In
          </Typography>
          <form onSubmit={handleEmailSignIn}>
            
            {error && (
              <Typography color="error" variant="body2" align="center" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}

          </form>

          <Button 
            variant="outlined" 
            startIcon={<GoogleIcon />} 
            onClick={handleGoogleSignIn}
            fullWidth
          >
            Sign in s Google
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Nemáte ešte účet?{' '}
            <Link href="/auth/registracia" style={{ color: '#1976d2', textDecoration: 'none' }}>
              Register
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}