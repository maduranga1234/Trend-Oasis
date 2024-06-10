import { Button } from '@headlessui/react'
import { Grid, Typography , Link} from '@mui/material'
import React from 'react'


export default function Footer() {
  return (
    <div>
      <Grid className='mt-10 text-center text-white bg-black'
      container
      sx={{bgcolor:"black",color:"white",py:3}}>

        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'> Company</Typography>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom> About</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom> Blog</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom> Press</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom> Jobs</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom> Partners</Button>
            </div>

        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'> Solution</Typography>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom> Marketing</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom> Analytics</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom> Commerce</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom> Insights</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom> Support</Button>
            </div>

        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'> Documentation</Typography>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom> Guides</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom> API Status</Button>
            </div>
           

        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'> Legal</Typography>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom> Claim</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom> Privacy</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterBottom> Terms</Button>
            </div>
           

        </Grid>
        <Grid className="pt-20" item xs={12}>
    <Typography variant="body2" component="p" align="center">
      &copy; 2024 Maduranga Sadaruwan. All rights reserved.
    </Typography>
   
  </Grid>
      </Grid>
    </div>
  )
}
