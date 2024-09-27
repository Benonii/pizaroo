import React from 'react';
import Image from 'next/image';
import pizzaPic from '../../public/assets/images/pizza.jpg';

function MenuItem() {
  return (
    <div>
        <div className='flex m-3 max-w-[600px] text-white mb-5'>
            <div className='w-[40%]'>
              <Image src={pizzaPic} alt='A pizza' className='w-full h-full rounded-lg m-0' />
            </div>
            <div className='flex justify-between ml-2 w-full'>
              <div className=''>
                <h3 className='text-md md:text-lg lg:text-xl font-semibold'>Margarita Pizza</h3>
                <p className='text-sm md:text-md lg:text-lg'>Tomato, Mozzarela, Basil</p>
              </div>
              <div className='flex justify-end'>
                <h3 className='text-md text-right m-0 p-0'>ETB 350</h3>
              </div>
            </div>
        </div>
        <hr className='border-white mx-4 mb-5'/>
    </div>
  )
}

export default MenuItem
