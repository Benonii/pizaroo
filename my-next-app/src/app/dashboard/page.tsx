import { Button } from '@mui/material'
import React from 'react';
import Pizza from '@/components/Pizza';
import Order from '@/components/Order';

function page() {
    const headerContent = (
        <Button variant='outlined' className=''>Home</Button>
    )
  return (
    <div className='mx-5 mt-5 h-screen'>
        <h2 className='text-2xl text-primaryGray font-semibold'>Active orders</h2>
        <hr className='mt-2 mx-3 border-gray3'/>

        <div className='grid place-items-center grid-cols-1 mt-5 gap-5 mb-10'>
          <Order />
          <Order />
          <Order />
        </div>

        <h2 className='text-2xl text-primaryGray font-semibold'>Order history</h2>
        <hr className='mt-2 mx-3 border-gray3'/>
        <div className='grid place-items-center grid-cols-1 mt-5 gap-5 mb-20'>
          <Order />
          <Order />
          <Order />
        </div>

        <hr />
        
    </div> 
  )
}

export default page
