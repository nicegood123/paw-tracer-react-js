import { Grid, Stack, Typography } from '@mui/material'
import React from 'react';
import SignUpProgress from '../parts/SignUpProgress';
import Logo from '../../images/PawTracerLogo2.png'
import { Link } from 'gatsby';

const SignUp = () => {
  return (
    <Grid container direction='column' alignItems='center' sx={{
        width:580,
        height:680,
        backgroundColor:'white',
        borderRadius:4,
        position: 'absolute',
        p:2,
        pt:3,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow:'2.0px 6.0px 6.0px hsl(0deg 0% 0% / 0.38)',
        overflow: 'hidden'
    }}>
        <Grid item>
            <img src={Logo} alt='AppLogo' style={{width:120, height: 30}}/>
        </Grid>

        <Grid item sx={{mt:2}}>
           <Stack direction='column'>
            <Typography align='center' sx={{fontSize: 22,fontFamily:'Fredoka One'}}>
                Get started with your account.
            </Typography>
            <Typography align='center' sx={{fontSize: 12, fontFamily:'Arvo', width:400, mt:1}}>
                Covering your pet with the best pet insurance will give you peace of mind in case of emergency
            </Typography>
           </Stack>
        </Grid>

        <Grid item sx={{width:'100%', mb:2}}>
            <SignUpProgress />
        </Grid>
        
        <Stack direction='row'>
            <Typography align='center' sx={{ fontFamily:'raleway', fontSize:13,  color: '#0F3E47', pb:2}}>
                Already have an account?
            </Typography>
            <Grid sx={{width:5}} />

            <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Typography align='center' sx={{ fontFamily:'raleway', fontSize:13, fontWeight:'bold',  color: '#0F3E47', pb:2}}>
                Sign in here!
            </Typography>
            </Link>
        </Stack>
       
    </Grid>
  )
}

export default SignUp 