import MenuItem from '@/components/MenuItem';
import { Button } from '@mui/material';
import React from 'react'

function page() {
  return (
    <div className='mx-5 mt-5 h-screen'>
        <h2 className='text-2xl text-primaryGray font-semibold'>Menu</h2>
        <hr className='mt-2 mx-3 border-gray3'/>

        <div className='grid place-items-center grid-cols-1 bg-gray2 justify-center mt-5 border rounded-md border-gray3 mb-10'>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />

            <Button size="large" variant="contained" className='bg-orange7 text-white mb-10'>+ Pizza</Button>
        </div>

        <h2 className='text-2xl text-primaryGray font-semibold'>Toppings</h2>
        <hr className='mt-2 mx-3 border-gray3'/>

        <div className='grid place-items-center grid-cols-1 bg-gray2 justify-center mt-5 border rounded-md border-gray3 text-white mb-10'>
            <div className=' w-full flex justify-between'>
                <p className='ml-2'>Cheese</p>
                <p className='mr-2'>ETB 40</p>
            </div>
            <div className='w-full flex justify-between'>
                <p className='ml-2'>Pepperani</p>
                <p className='mr-2'>ETB 40</p>
            </div>
            <div className='w-full flex justify-between'>
                <p className='ml-2'>Basil</p>
                <p className='mr-2'>ETB 40</p>
            </div>
            <div className='w-full flex justify-between'>
                <p className='ml-2'>Olives</p>
                <p className='mr-2'>ETB 40</p>
            </div>

            <Button size="large" variant="contained" className='bg-orange7 text-white mt-10 mb-10'>+ Topping</Button>

        </div>

        <hr />

    </div>
  )
}

export default page
