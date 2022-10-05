import { Button, Grid, TextField, Typography, Stack } from '@mui/material'
import { navigate } from 'gatsby'
import React from 'react'
import { useDispatch } from 'react-redux'

// Form and Data Handling
import {useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

//Schema: Rules for inputs
const schema = yup.object({
    email: yup.string().email().required('email is required'),
    password: yup.string().required('password is required'),
  });
 
//---------------------------------------------------------------------------------------------------------------------------

const SignUpForm = () => {
   
    // const dispatch = useDispatch()

   //For react hook form
   const {register, handleSubmit} = useForm({
    resolver: yupResolver(schema)
  });
  
  const input ={
   email: '',
   password: ''
  }
   const [data, setData] = React.useState(input)
   const [warning, setWarning] = React.useState('')
   const [count, setCount] = React.useState(0)
   
   const handleWarning = (bool) => {
        if (bool){
           setWarning('Invalid Credentials')
            setCount(0)
        }
   }


    const onSubmit = (data) => {
        const findInput ={
            email: data.email,
            password: data.password
        }
        setData(findInput)
        setCount(1)
        
    }


  return (
    <Grid item sx={{
        width: '100%',
        height:'100%',
        p:5,
        pt:4,
    }}>
        <form style={{width:'100%'}} onSubmit={handleSubmit(onSubmit)}>
       

        <Stack direction='row' sx={{width:'100%'}}>
            <Stack direction='column' sx={{width:'100%'}}>
                <Typography variant='h6'  sx={{fontFamily:'raleway'}}>
                    Personal Details
                </Typography> 

                <Grid sx={{pb:2, pt:1}}>
                    <TextField  
                        {...register("first_name")} 
                        type='text'
                        label="First name" 
                        size='regular' 
                        variant="outlined" 
                        sx={{width:'100%'}}
                    />
                </Grid>

                <Stack direction='row' sx={{width:'100%'}}>
                    <Grid sx={{pb:2, width:'100%'}}>
                        <TextField  
                            {...register("middle_name")} 
                            type='text'
                            label="Middle name" 
                            size='regular' 
                            variant="outlined" 
                            sx={{width:'100%'}}
                        />
                    </Grid>
                    <div style={{width:10}}/>
                    <Grid sx={{pb:2, width:'100%'}}>
                        <TextField  
                            {...register("last_name")} 
                            type='text'
                            label="Last name" 
                            size='regular' 
                            variant="outlined" 
                            sx={{width:'100%'}}
                        />
                    </Grid>
                </Stack>

                <Typography variant='h6'  sx={{fontFamily:'raleway'}}>
                    Contact Details
                </Typography> 

                <Grid sx={{pb:2, pt:1}}>
                    <TextField  
                        {...register("address")} 
                        type='text'
                        label="Address" 
                        size='regular' 
                        variant="outlined" 
                        sx={{width:'100%'}}
                    />
                </Grid>

                <Stack direction='row' sx={{width:'100%'}}>
                    <Grid sx={{pb:2, width:'100%'}}>
                        <TextField  
                            {...register("contact")} 
                            type='text'
                            label="Contact" 
                            size='regular' 
                            variant="outlined" 
                            sx={{width:'100%'}}
                        />
                    </Grid>
                    <div style={{width:10}}/>
                    <Grid sx={{pb:2, width:'100%'}}>
                        <TextField  
                            {...register("email")} 
                            type='email'
                            label="Email" 
                            size='regular' 
                            variant="outlined" 
                            sx={{width:'100%'}}
                        />
                    </Grid>
                </Stack>
            </Stack>

            <div style={{width:35}}/>

            <Stack direction='column' sx={{width:'100%'}}>
                <Typography variant='h6'  sx={{fontFamily:'raleway'}}>
                    Account Details
                </Typography> 

                <Grid sx={{pb:2,pt:1}}>
                    <TextField
                        {...register("username")} 
                        type='text'
                        label="Username" 
                        size='regular' 
                        variant="outlined" 
                        sx={{width:'100%'}}
                    />
                </Grid>

                <Grid sx={{pb:2}}>
                    <TextField
                        {...register("password")} 
                        type='password'
                        label="Password" 
                        size='regular' 
                        variant="outlined" 
                        sx={{width:'100%'}}
                    />
                </Grid>
                <Grid sx={{pb:2}}>
                    <TextField
                        {...register("retype_password")} 
                        type='password'
                        label="Password" 
                        size='regular' 
                        variant="outlined" 
                        sx={{width:'100%'}}
                    />
                </Grid>

                <Grid sx={{pb:2}}>
                    <Button type='submit'  variant='contained' sx={{width:'100%', backgroundColor:'#7CB2B1', fontFamily: 'Arvo', textTransform:'none', borderRadius: 5, color:'white'}}>
                        Sign Up
                    </Button>
                    {/* onClick={()  => navigate('/module')} */}
                </Grid>
            </Stack>
        </Stack>


        </form>
    </Grid>
  )
}

export default SignUpForm