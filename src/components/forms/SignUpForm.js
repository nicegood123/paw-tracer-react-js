import { Button, Grid, TextField, Typography, Stack } from '@mui/material'
import React, {useState} from 'react'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
// Form and Data Handling
import {useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

//Schema: Rules for inputs
const schema1 = yup.object({
    first_name: yup.string(),
    middle_name: yup.string(),
    last_name: yup.string(),
    address: yup.string(),
    contact: yup.string(),
    email: yup.string().email(),
    username: yup.string(),
    confirm_passwor: yup.string(),
    password: yup.string(),
    
  });

//---------------------------------------------------------------------------------------------------------------------------

const SignUpForm = ({stepValue,stepChange, backChange }) => {
   
    //STATES
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //For react hook form
    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema1),
    });


    const handleSubmitUser = () => {  
        const input = {
            'first_name': firstName,
            'middle_name': middleName,
            'last_name': lastName,
            'address': address,
            'contact': contact,
            'email': email,
            'username': username,
            'password': password,
        } 
        console.log(input)
    }
   
    const onSubmit = (data) => {
        // setStepOneData(stepOneData.push(data))
        console.log(data)
        stepChange(2)  
    }

    const onSubmit2 = (data) => {
        
        console.log(data)
        stepChange(3)  
    }

    const onSubmit3 = (data) => {
        
        console.log(data)
         
    }


  return (
        <Grid sx={{width:'100%'}}>
        <form style={{width:'100%'}} onSubmit={handleSubmit(onSubmit)}>
        <Stack direction='column' sx={{width:'100%', display: stepValue === 1 ? 'flex' : 'none'}}>
            <Typography  sx={{fontFamily:'raleway', fontSize: 17}}>
                Personal Details
            </Typography> 

            <Grid sx={{pb:2, pt:1}}>
                <TextField  
                    {...register("first_name")} 
                    type='text'
                    required
                    value={firstName}
                    label="First name" 
                    size='regular' 
                    variant="outlined" 
                    sx={{width:'100%'}}
                    onChange={(event) => {
                        setFirstName(event.target.value);
                       
                    }}
                />
            </Grid>

        
            <Grid sx={{pb:2, width:'100%'}}>
                <TextField  
                    {...register("middle_name")}
                    value={middleName} 
                    type='text'
                    required
                    label="Middle name" 
                    size='regular' 
                    variant="outlined"
                    sx={{width:'100%'}}
                    onChange={(event) => {
                        setMiddleName(event.target.value);
                        
                    }}
                />
            </Grid>

            
            <Grid sx={{pb:2, width:'100%', mb:3}}>
                <TextField  
                    {...register("last_name")} 
                    value={lastName}
                    type='text'
                    required
                    label="Last name" 
                    size='regular' 
                    variant="outlined"
                    sx={{width:'100%'}}
                    onChange={(event) => {
                        setLastName(event.target.value);
                       
                    }}
                />
            </Grid>

            <Stack direction='row' sx={{width:'100%', display: stepValue === 1 ? 'flex' : 'none'}}>
                <div style={{flexGrow:1}}/>

                <Button 
                    endIcon={<ArrowForwardIosRoundedIcon/>}
                    variant='contained' 
                    type='submit'
                    sx={{
                        backgroundColor:'#7CB2B1',
                        borderRadius:5,
                        textTransform:'none',
                        fontFamily:'Arvo',
                        fontSize:15,
                        height:35,
                        width:150
                    }}
                >
                    Next
                </Button>
            </Stack>
        </Stack>
        </form>

        <form style={{width:'100%'}} onSubmit={handleSubmit(onSubmit2)}>
        <Stack direction='column' sx={{width:'100%', display: stepValue === 2 ? 'flex' : 'none'}}>
            <Typography  sx={{fontFamily:'raleway', fontSize: 17}}>
                Contact Details
            </Typography> 

            <Grid sx={{pb:2, pt:1}}>
                <TextField  
                    {...register("address")} 
                    value={address}
                    type='text'
                    required
                    label="Address" 
                    size='regular' 
                    variant="outlined"
                    sx={{width:'100%'}}
                    onChange={(event) => {
                        setAddress(event.target.value);
                    }}
                />
            </Grid>

            <Grid sx={{pb:2, width:'100%'}}>
                <TextField  
                    {...register("contact")} 
                    value={contact}
                    type='text'
                    required
                    label="Contact" 
                    size='regular' 
                    variant="outlined"
                    sx={{width:'100%'}}
                    onChange={(event) => {
                        setContact(event.target.value);
                    }}
                />
            </Grid>
            
            <Grid sx={{pb:2, width:'100%', mb:3}}>
                <TextField  
                    {...register("email")}
                    value={email} 
                    type='email'
                    label="Email" 
                    size='regular' 
                    variant="outlined"
                    sx={{width:'100%'}}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
            </Grid>

            <Stack direction='row' sx={{width:'100%', display: stepValue === 2 ? 'flex' : 'none'}}>
                <Button 
                    startIcon={<ArrowBackIosRoundedIcon/>}
                    type='button'
                    onClick={()=>backChange(1)}
                    sx={{
                        backgroundColor: 'transparent',
                        borderRadius:5,
                        color:'#7CB2B1',
                        textTransform:'none',
                        fontFamily:'Arvo',
                        fontSize:15,
                        height:35,
                        width:100
                    }}
                >
                    Back
                </Button>
                <div style={{flexGrow:1}}/>
                <Button 
                    endIcon={<ArrowForwardIosRoundedIcon/>}
                    variant='contained' 
                    type='sumbit'
                    sx={{
                        backgroundColor:'#7CB2B1',
                        borderRadius:5,
                        textTransform:'none',
                        fontFamily:'Arvo',
                        fontSize:15,
                        height:35,
                        width:150
                    }}
                    
                >
                    Next
                </Button>
            </Stack> 
        </Stack>
        </form>

        <form style={{width:'100%'}} onSubmit={handleSubmit(onSubmit3)}>
        <Stack direction='column' sx={{width:'100%', display: stepValue === 3 ? 'flex' : 'none'}}>
            <Typography  sx={{fontFamily:'raleway', fontSize: 17}}>
                Account Details
            </Typography> 

            <Grid sx={{pb:2,pt:1}}>
                <TextField
                    {...register("username")}
                    value={username} 
                    type='text'
                    required
                    label="Username" 
                    size='regular' 
                    variant="outlined"
                    sx={{width:'100%'}}
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                />
            </Grid>

            <Grid sx={{pb:2}}>
                <TextField
                    {...register("password")}
                    value={password} 
                    type='password'
                    label="Password" 
                    size='regular' 
                    variant="outlined"
                    sx={{width:'100%'}}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}  
                />
            </Grid>
            <Grid sx={{pb:2, mb:3}}>
                <TextField
                    {...register("confirm_password")}
                    value={confirmPassword} 
                    type='password'
                    label="Confirm password" 
                    size='regular' 
                    variant="outlined"
                    sx={{width:'100%'}}
                    onChange={(event) => {
                        setConfirmPassword(event.target.value);
                    }}
                />
            </Grid>

            <Stack direction='row' sx={{width:'100%', display: stepValue === 3 ? 'flex' : 'none'}}>

                <Button 
                    startIcon={<ArrowBackIosRoundedIcon/>}
                    type='button'
                    onClick={() => backChange(2)}
                    sx={{
                        backgroundColor: 'transparent',
                        borderRadius:5,
                        color:'#7CB2B1',
                        textTransform:'none',
                        fontFamily:'Arvo',
                        fontSize:15,
                        height:35,
                        width:100
                    }}
                >
                    Back
                </Button>
                <div style={{flexGrow:1}}/>
                <Grid>
                    <Button 
                        type='submit'
                        // onClick={() => handleSubmitUser()}  
                        variant='contained' 
                        sx={{
                            width:200, 
                            backgroundColor:'#7CB2B1', 
                            fontFamily: 'Arvo',
                            fontSize: 15, 
                            textTransform:'none', 
                            borderRadius: 5, 
                            height:35,
                            color:'white'
                        }}
                    >
                        Submit
                    </Button>
                </Grid>
            </Stack>
        </Stack>
        </form>
        </Grid>
    
  )
}

export default SignUpForm