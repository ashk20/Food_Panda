import React from 'react';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';



export default function PlaceOrder() {
  const orders = useSelector(state => state.order.orders)
 // console.log(orders);
 
  return (
    <div >
      <Typography variant="h3" style= {{ fontSize: '50px', marginBottom: '1rem', textAlign: 'left', color: 'floralwhite', paddingLeft: '30px', fontFamily: 'monospace' }}>
       Orders
       {orders}

      </Typography>

    
    </div>
  );
}
