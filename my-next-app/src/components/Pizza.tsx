import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

function Pizza() {
  return (
    <div>
      <Card sx={{
          width: 250,
          minHeight: 200,
          backgroundImage: 'url("/assets/images/pizza-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRadius: '8px'

        }}
      >
        <CardContent>
            <div className="">
                <h3 className='text-white fonot-inria text-xl font-semibold'>Margarita Pizza</h3>
                <h4 className='text-white text-lg font-semibold'>ETB 350</h4>
            </div>
            <p className='text-white text-sm mt-1 mx-2'>Tomato, Mozzarella, Basil</p>
        </CardContent>
        <CardActions className='flex justify-end'>
            <Button size='medium' className='bg-primaryOrange text-white mb-4 mr-3'>Order now</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Pizza
