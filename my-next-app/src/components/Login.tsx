// pages/auth/signin.tsx
"use client";

import { getProviders, signIn } from 'next-auth/react';
import { Button, Container, TextField, Typography, Box } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';

export default function Login({ providers }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSignIn = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   await signIn('credentials', {
  //     email,
  //     password,
  //     callbackUrl: '/', // Redirect after successful sign-in
  //   });
  // };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" className='text-gray4'>
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            className="active:border-orange2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Typography>Don't have an account? <Link href="/signup" className='text-orange3 underline'>Sign up</Link> instead </Typography>
          <Button
            fullWidth
            variant="contained"
            className='mt-3 mb-3 bg-orange2'
          >
            <Link href="/">Sign In</Link>
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

// Get authentication providers at build time
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
