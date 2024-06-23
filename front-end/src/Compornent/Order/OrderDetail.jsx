import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTraker from './OrderTraker'
import { Box, Grid } from '@mui/material'
import { color } from '../Product/FilterData'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function OrderDetail() {
  return (
    <div className='px-5 lg:px-20'>
        <div>
            <h1 className='text-xl font-bold py-7'>Dilivery Address</h1>
        <AddressCard/>
        </div>

        <div className='py-20'>
            <OrderTraker activeStep={3}/>
        </div>

        <Grid className='space-y-5' container>
            {[1,1,1,1,1].map((item)=><Grid item container className='p-5 border rounded-md shadow-xl' sx={{alignItems:"center",justifyContent:"space-between"}}>

<Grid item xs={6}>
    <div className='flex items-center space-x-4'>
        <img className='w-[5rem] h-[5rem] object-cover object-top' src='data:image/jpeg;base64,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'/>
   
   <div className='ml-5 space-y-2'>
    <p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
    <p className='space-x-5 text-xs font-semibold opacity-50'><span>Color:pink</span> <span>Size: M</span></p>
    <p>Seller: linaria</p>
    <p>Rs.4300</p>
   </div>
   
    </div>

</Grid>

<Grid item>

    <Box sx={{color:deepPurple[500]}}>

     <StarBorderIcon sx={{fontSize:"2rem"}} fontSize={"2px"}  className='px-2'/>
     <span>Rate & Review Product</span>

    </Box>

</Grid>

</Grid>)}
            

        </Grid>
      
    </div>
  )
}
