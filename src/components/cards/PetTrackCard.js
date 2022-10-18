import { Grid, Tooltip,IconButton, Avatar, Typography, Stack } from '@mui/material'
import React, { useState } from 'react'
import MyLocationRoundedIcon from '@mui/icons-material/MyLocationRounded';
import LocationDisabledRoundedIcon from '@mui/icons-material/LocationDisabledRounded';

const PetTrackCard = ({ id, name,  image, longitude, latitude, track, handleClick}) => {
  
   
    return (

    <Stack 
        direction ='row' 
        alignItems='center' 
        sx={{
            //border:'1px solid #E7E9EB',
            // boxShadow:'1.0px 2.0px 2.0px hsl(0deg 0% 0% / 0.28)',
            // borderRadius:5,
            p:2,
            width:'100%'
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
                            }}/
                        >
                    </IconButton>
                </Tooltip>
                <Stack direction ='column' sx={{ml:4}}>
                    <Typography variant='h6' sx={{fontFamily:'Raleway'}}>
                        {name}
                    </Typography>
                    <div style={{height:7}}/>
                    {/* <Stack direction ='row' alignItems='center'>
                        <Typography variant='caption' sx={{fontFamily:'Raleway'}}>
                            <b>Coordinates:</b> 
                        </Typography>
                        <Typography variant='caption' sx={{ml:1, fontFamily:'Raleway'}}>
                            [{longitude}, {latitude}] 
                        </Typography>
                    </Stack> */}
                </Stack>
            </Stack>
        </Grid>
        <Tooltip title='Track Me'>
            <IconButton onClick={()=>handleClick(id, name,  image, longitude, latitude)} disabled={track === 0}>
                {track === 0 ? <LocationDisabledRoundedIcon sx={{fontSize:40, color: '#E0DFDF' }}/> : <MyLocationRoundedIcon sx={{fontSize:40, color: '#49b68c'}}/>}
            </IconButton>
        </Tooltip>
    </Stack>
        
  )
}

export default PetTrackCard