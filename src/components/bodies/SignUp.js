import { Grid, Stack, Typography } from '@mui/material'

import React from 'react';
import SignUpForm from '../forms/SignUpForm';
import Logo from '../../images/PawTracerLogo2.png'
import { Link } from 'gatsby';

const SignUp = () => {
  return (
    <Grid container direction='column' alignItems='center' sx={{
        width:1000,
        height:'100%',
        maxHeight:700,
        backgroundColor:'white',
        borderRadius:4,
        position: 'absolute',
        p:2,
        pt:3,
        top: '50%',
        left: '50%',
        overflow:'hidden',
        transform: 'translate(-50%, -50%)',
        boxShadow:'2.0px 6.0px 6.0px hsl(0deg 0% 0% / 0.38)'
    }}>
        <Grid item>
            <img src={Logo} alt='AppLogo' style={{width:160, height: 55}}/>
        </Grid>

        <Grid item sx={{mt:2}}>
           <Stack direction='column'>
            <Typography align='center' variant='h4' sx={{fontFamily:'Fredoka One'}}>
                Get started with your account.
            </Typography>
            <Typography align='center'  variant='hh6' sx={{fontFamily:'Arvo', width:500, mt:1}}>
                Covering your pet with the best pet insurance will give you peace of mind in case of emergency
            </Typography>
           </Stack>
        </Grid>

        <Grid item sx={{width:'100%'}}>
            <SignUpForm />
        </Grid>
        
       
    </Grid>
  )
}

export default SignUp 