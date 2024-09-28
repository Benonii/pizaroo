// pages/auth/signin.tsx
"use client";

import { getProviders, signIn } from 'next-auth/react';
import { Button, Container, TextField, Typography, Box } from '@mui/material';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Signup({ providers }: any) {
  type formDataType = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone: string
    isVendor: boolean
  }

  const [ formData, setFormData ] = useState<formDataType>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    isVendor: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      // Convert value to boolean if the input type is a checkbox
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

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
          Sign Up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="first-name"
            label="First name"
            name="firstName"
            autoComplete="name"
            autoFocus
            value={formData.firstName}
            onChange={(e) => handleChange}
          />
        <TextField
            margin="normal"
            required
            fullWidth
            id="last-name"
            label="Last name"
            name="lastName"
            autoComplete="name"
            autoFocus
            value={formData.lastName}
            onChange={(e) => handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            value={formData.username}
            onChange={(e) => handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={(e) => handleChange}
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
            value={formData.password}
            className="active:border-orange2"
            onChange={(e) => handleChange}
          />
        <Typography>Don't have an account? <Link href="/login" className='text-orange3 underline'>Login</Link> instead </Typography>

          <Button
            fullWidth
            variant="contained"
            className='mt-3 mb-3 bg-orange2'
          >
            <Link href="/login">Sign up</Link>
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
