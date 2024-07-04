import { Password } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../State/Auth/Action';

export default function LoginForm() {

    const dispatch=useDispatch();
    const navigate=useNavigate();

    

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const data = new FormData(event.currentTarget);
        const userData={
        
            email:data.get("email"),
            password:data.get("password")
            
        }
        
        dispatch(login(userData))
        console.log("userData",userData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                   

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
                         Login
                        </Button>
                    </Grid>
                </Grid>
            </form>

            <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center py-3'>
                    <p>if you don't have account ?</p>
                    <Button onClick={()=>navigate("/register")} className='ml-5' size='small'>Register</Button>
                </div>
            </div>
        </div>
    );
}
