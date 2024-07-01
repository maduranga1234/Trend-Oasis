import { Password } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Grid, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { getUser, register } from '../State/Auth/Action';

export default function RegisterForm() {

    const navigate= useNavigate();
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt");
    const {auth}=useSelector(store=>store)

    useEffect(()=>{
        if(jwt){
            dispatch(getUser(jwt))
        }
      
    },[jwt,auth.jwt])



  

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const data = new FormData(event.currentTarget);
        const userData={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            email:data.get("email"),
            password:data.get("password")
            
        }
        dispatch(register(userData))
        console.log("userData",userData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='firstName'
                            name='firstName'
                            label='First Name'
                            fullWidth
                            autoComplete='given-name'
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='lastName'
                            name='lastName'
                            label='Last Name'
                            fullWidth
                            autoComplete='family-name'
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            required
                            id='email'
                            name='email'
                            label='Email'
                            fullWidth
                            autoComplete='email'
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            required
                            id='password'
                            name='password'
                            label='Password'
                            type='password'
                            fullWidth
                            autoComplete='new-password'
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            className='w-full bg-blue-400'
                            type='submit'
                            variant='contained'
                            size='large'
                            sx={{ padding: '.8rem 0' }}
                        >
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>

            <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center py-3'>
                    <p>if you have already account ?</p>
                    <Button onClick={()=>navigate("/login")} className='ml-5' size='small'>Login</Button>
                </div>
            </div>
        </div>
    );
}
