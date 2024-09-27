import Button from '@mui/material/Button';
import Image from "next/image";
import styles from "./page.module.css";

import RootLayout from './layout';
import React from 'react';
import Pizza from '@/components/Pizza';

export default function Home() {
  const headerContent = (
    <div className='flex'>
      <div className="flex items-center justify-center space-x-4">
        <Button variant="outlined" size='small' className='border border-gray2 text-gray4'>Login</Button>
        <Button variant="outlined" size='small' className='border border-gray2 text-gray4'>Sign up</Button>
      </div>
    </div>
  )
  return (
      <div className='mx-5 mt-5 h-screen'>
        <h2 className='text-2xl text-primaryGray font-semibold'>Popular Pizzas</h2>
        <hr className='mt-2 mx-3 border-gray3'/>

        <div className='grid place-items-center grid-cols-responsive mt-5 mx-5 gap-5 mb-20'>
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
        </div>

        <hr />
      </div> 
  );
}
