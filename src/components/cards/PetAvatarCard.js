import { Grid, Tooltip,IconButton, Avatar, Typography, Stack } from '@mui/material'
import React from 'react'

const PetAvatarCard = ({status, id, name, type, weight, height, breed, image, color}) => {
  return (

    <Stack direction ='row' alignItems='center'>
        <Tooltip title={name}>
            <IconButton sx={{ p: 0 }}>
                <Avatar alt="pet image" src={image} sx={{width:60, height:60}}/>
            </IconButton>
        </Tooltip>
        <div style={{width:20}}/>
        <Typography variant='h6' sx={{fontFamily:'Raleway'}}>
            {name}
        </Typography>
    </Stack>
        
  )
}

export default PetAvatarCard