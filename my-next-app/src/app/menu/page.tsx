import MenuItem from '@/components/MenuItem';
import React from 'react'

function page() {
  return (
    <div className='mx-5 mt-5 h-screen'>
        <h2 className='text-2xl text-primaryGray font-semibold'>Menu</h2>
        <hr className='mt-2 mx-3 border-gray3'/>

        <div className='grid place-items-center grid-cols-1 bg-gray2 justify-center mt-5 border rounded-md border-gray3'>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    </div>
  )
}

export default page
