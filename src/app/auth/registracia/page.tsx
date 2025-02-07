'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  Button, 
  TextField, 
  Card, 
  CardContent,  
  Typography, 
  Divider,
  Box,
  FormControlLabel,
  Checkbox
} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const router = useRouter()

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')


    if (!isChecked) {
      setError('Musíš súhlasiť s GDPR a Podmienkami na registráciu.')
      return
    }

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
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

    if (!isChecked) {
      setError('Musíš súhlasiť s GDPR a Podmienkami na registráciu.')
      return
    }
    signIn('google', { callbackUrl: '/' })
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Card sx={{ maxWidth: 400, width: '100%' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            Register
          </Typography>
          <form onSubmit={handleEmailSignIn}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            

            {error && (
              <Typography color="error" variant="body2" align="center" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
            

            <FormControlLabel
              control={
                <Checkbox 
                  checked={isChecked} 
                  onChange={(e) => setIsChecked(e.target.checked)} 
                />
              }
              label={
                <Typography variant="body2">
                  Súhlasím s <a href="/gdpr" target="_blank" style={{ color: '#1976d2', textDecoration: 'none' }}>GDPR</a> a <a href="/podmienky" target="_blank" style={{ color: '#1976d2', textDecoration: 'none' }}>Podmienkami</a>
                </Typography>
              }
              sx={{ mt: 1 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </form>
          <Divider sx={{ my: 2 }}>OR</Divider>
          <Button 
            variant="outlined" 
            startIcon={<GoogleIcon />} 
            onClick={handleGoogleSignIn}
            fullWidth
          >
            Register s Google
          </Button>
          

          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Máte už účet?{' '}
            <Link href="/auth/prihlasenie" style={{ color: '#1976d2', textDecoration: 'none' }}>
              Login
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
