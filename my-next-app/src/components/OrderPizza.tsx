"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import { TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface OrderPizzaProps {
    pizzaName: string,
    pizzaImage: any,
}

export default function OrderPizza({pizzaName, pizzaImage}: OrderPizzaProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  return (
    <div>
      <Button size='medium' className='bg-primaryOrange text-white mb-4 mr-3' onClick={handleOpen}>Order now</Button>      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="h-[50vw] border-gray4 rounded-lg">
          <div className="flex">
            <Image
              src={pizzaImage}
              alt="Pepperoni Pizza"
              objectFit="cover" 
              className='border-2 border-gray2 rounded-xl'
            />
         </div>
          <h2 className='font-grover text-2xl mt-1 mb-5'>
            {pizzaName}
          </h2>
          <TextField id="quantity-input" label="quantity" variant="outlined" />
          <div>

            <h3>Add toppings</h3>
            <FormControlLabel
                label="Cheese"
                control={
                    <Checkbox {...label} />
                }
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}