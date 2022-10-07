import React from 'react'
import { Avatar, Grid, Stack, Typography } from '@mui/material'
function PetCard() {
  return (
    <Grid 
        container 
        direction='column' 
        alignItems='center' 
        sx={{
            width:680,
            height:450,
            border:'1px solid #7CB2B1',
            borderRadius:5,
            overflow:'hidden'
        }}
    >
        <Grid item sx={{width:'100%', height:140, backgroundColor:'#7CB2B1'}}>

        </Grid>

        <Grid item sx={{width:'100%',  pl:5}}>
            <Stack direction='row' alignItems={'center'}>
                <Avatar
                    src='https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/2/2020/11/shutterstock_1701805045-2-768x512.jpg' 
                    sx={{
                        width:190, 
                        height:190, border:'5px solid white', 
                        position:'relative', 
                        top:'-95px'
                    }}
                />
                
                <div style={{width:30}}/>

                <Stack direction='column' sx={{position:'relative', top:'-40px'}}>
                    <Typography  sx={{fontFamily: 'Arvo', fontWeight:'bold', fontSize: 38, letterSpacing:2}}>
                        Mr. Biggles
                    </Typography>
                    <Typography variant='body1' sx={{fontFamily: 'raleway', fontWeight:'bold'}}>
                        Pet Type: Dog
                    </Typography>
                </Stack>
                <div style={{width:50}}/>

                <Grid sx={{position:'relative', top:'-40px', border:'3px solid black'}}>
                    <img 
                        src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/640px-QR_code_for_mobile_English_Wikipedia.svg.png'} 
                        alt='Pet QRcode' 
                        style={{width:80, height: 60}}/>
                </Grid>
            </Stack>
        </Grid>

        <Grid item sx={{width:'100%', pl:5, position:'relative', top:'-60px'}}>
            <Stack direction='row' alignItems='center'>
                <Stack direction='column'>
                    <Typography variant='body1' sx={{fontFamily: 'raleway', fontWeight:'bold'}}>
                        Weight:
                    </Typography>
                    <Typography variant='body1' sx={{fontFamily: 'raleway'}}>
                        3.2 Kilogram
                    </Typography>

                    <div style={{height:10}}/>

                    <Typography variant='body1' sx={{fontFamily: 'raleway', fontWeight:'bold'}}>
                        Height:
                    </Typography>
                    <Typography variant='body1' sx={{fontFamily: 'raleway'}}>
                        52 centimeters
                    </Typography>
                </Stack>
            </Stack>
        </Grid>

    </Grid>
  )
}

export default PetCard