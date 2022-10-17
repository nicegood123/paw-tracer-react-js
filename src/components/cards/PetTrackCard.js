import { Grid, Tooltip,IconButton, Avatar, Typography, Stack } from '@mui/material'
import React, { useState } from 'react'
import MyLocationRoundedIcon from '@mui/icons-material/MyLocationRounded';
import { Login } from '@mui/icons-material';

const PetTrackCard = ({ id, name,  image, longitude, latitude, track, handleClick}) => {
  
   
    return (

    <Stack 
        direction ='row' 
        alignItems='center' 
        sx={{
            border:'1px solid #E7E9EB',
            boxShadow:'1.0px 2.0px 2.0px hsl(0deg 0% 0% / 0.28)',
            borderRadius:5,
            p:2
        }}
    >
        <Grid sx={{flexGrow:1}}>
            <Stack direction ='row' alignItems='center'>
                <Tooltip >
                    <IconButton sx={{ p: 0 }}>
                        <Avatar 
                            alt="pet image" 
                            src={image === ''? 'https://media.istockphoto.com/vectors/heart-shape-or-love-symbol-in-animal-paw-print-for-pet-care-icon-vector-id1142468738?k=20&m=1142468738&s=612x612&w=0&h=_Mu8PsiJS20wUYSMqRPxluwh4pk5QEAqJ8LF8YaKRfk=' : image  } 
                            sx={{
                                width:80,
                                height:80, 
                                border: track === 1 ? '4px solid #5a84e7':'4px solid #abb6c3'
                            }}/
                        >
                    </IconButton>
                </Tooltip>
                <Stack direction ='column' sx={{ml:4}}>
                    <Typography variant='h6' sx={{fontFamily:'Arvo', fontWeight:'bold'}}>
                        {name}
                    </Typography>
                    <div style={{height:7}}/>
                    <Stack direction ='row' alignItems='center'>
                        <Typography variant='caption' sx={{fontFamily:'Raleway'}}>
                            <b>Longitude:</b> {longitude}
                        </Typography>
                        <Typography variant='caption' sx={{ml:2, fontFamily:'Raleway'}}>
                            <b>Latitude:</b> {latitude}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Grid>
        <Tooltip title='Track Me'>
            <IconButton onClick={()=>handleClick(id, name,  image, longitude, latitude)}>
                <MyLocationRoundedIcon sx={{fontSize:40, color:'#49b68c'}}/>
            </IconButton>
        </Tooltip>
    </Stack>
        
  )
}

export default PetTrackCard