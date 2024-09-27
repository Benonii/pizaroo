import React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import pizzaImg from '../../public/assets/images/pizza.jpg';
import { Typography } from '@mui/material';

function Order() {
  return (
    <Card sx={{ display: 'flex', width:'clamp(280px, 60vw, 600px)', borderRadius: 2, overflow: 'hidden' }}>
      {/* Image Section */}
      <div style={{ width: '50%', position: 'relative' }}>
        <Image
          src={pizzaImg}
          alt="Pepperoni Pizza"
          layout="fill"
          objectFit="cover" 
        />
      </div>

      {/* Content Section */}
      <CardContent sx={{ padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {/* Title */}
        <Typography variant="h6" component="div" fontWeight="bold">
          Pepperoni Pizza
        </Typography>
        {/* Details */}
        <Typography variant="body2" color="textSecondary" component="p">
          Quantity: 3<br />
          Price: ETB 1170<br />
          Status: On the way
        </Typography>
        {/* Button */}
        <CardActions sx={{ padding: 0, paddingTop: 2 }}>
          <Button variant="contained" color="error">
            Cancel
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default Order
