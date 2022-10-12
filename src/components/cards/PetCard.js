import React from 'react'
import { Avatar, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import Logo from '../../images/PawTracerLogo5.png';
import IdBackground from '../../images/mediaOneBackground.webp';
import RoomRoundedIcon from '@mui/icons-material/RoomRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {FaUserMd} from 'react-icons/fa';

function PetCard({status, id, name, type, weight, height, breed, image, color, qr}) {
  return (
    <Grid 
        container 
        direction='column' 
        alignItems='center' 
        sx={{
            width:680,
            height:'100%',
            //maxHeight:450,
            border:'1px solid #7CB2B1',
            boxShadow:'4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38)',
            borderRadius:5,
  
            overflow:'hidden'
        }}
    >
        <Grid item sx={{width:'100%', height:140, backgroundImage:`url(${IdBackground})`}}>
            <img src={Logo} alt='PetTracerLogo' style={{height:70, width:210, position:'relative', left:430, top:40}}/> 
        </Grid>

        <Grid item sx={{width:'100%',  pl:5}}>
            <Stack direction='row' alignItems={'center'} sx={{pr:5}}>
                <Avatar
                    src={image}
                    sx={{
                        width:190, 
                        height:190, border:'5px solid white', 
                        position:'relative', 
                        top:'-95px'
                    }}
                />
                
                <div style={{width:30}}/>

                <Stack direction='column' sx={{position:'relative', top:'-40px', flexGrow:1}}>
                    <Typography  sx={{fontFamily: 'Arvo', fontWeight:'bold', fontSize: 38, letterSpacing:2}}>
                        {name}
                    </Typography>
                    <Typography variant='body1' sx={{fontFamily: 'raleway', fontWeight:'bold'}}>
                        Pet Type: {type}
                    </Typography>
                </Stack>
                <div style={{width:50}}/>

                <Grid sx={{position:'relative', top:'-40px', border:'3px solid black'}}>
                    <img 
                        src={qr} 
                        alt='Pet QRcode' 
                        style={{width:80, height: 60}}/>
                </Grid>
            </Stack>
        </Grid>

        <Grid item sx={{width:'100%', height:100, p:5, pl:6, position:'relative', top:'-50px'}}>
            <Stack direction='row' alignItems='center' sx={{height:'100%'}}>
                <Stack direction='column' sx={{minWidth:130}}>
                    <Typography variant='body1' sx={{fontFamily: 'raleway', fontWeight:'bold'}}>
                        Weight:
                    </Typography>
                    <Typography variant='body1' sx={{fontFamily: 'raleway'}}>
                       {weight} Kilogram
                    </Typography>

                    <div style={{height:15}}/>

                    <Typography variant='body1' sx={{fontFamily: 'raleway', fontWeight:'bold'}}>
                        Height:
                    </Typography>
                    <Typography variant='body1' sx={{fontFamily: 'raleway'}}>
                        {height} Foot
                    </Typography>
                </Stack>

                <Grid sx={{width: 30}}/>
                <Grid sx={{height:120}} >
                    <Divider orientation='vertical' style={{ background: '#BCB4AE'}}/>
                </Grid>
                <Grid sx={{width: 30}}/>

                <Stack direction='column' sx={{minWidth:110, maxWidth:180, flexGrow:1}}>
                    <Typography variant='body1' sx={{fontFamily: 'raleway', fontWeight:'bold'}}>
                        Breed:
                    </Typography>
                    <Typography variant='body1' sx={{fontFamily: 'raleway'}}>
                        {breed}
                    </Typography>

                    <div style={{height:15}}/>

                    <Typography variant='body1' sx={{fontFamily: 'raleway', fontWeight:'bold'}}>
                        Color:
                    </Typography>
                    <Typography variant='body1' sx={{fontFamily: 'raleway'}}>
                        {color}
                    </Typography>
                </Stack>

                
                <Grid sx={{height:120}} >
                    <Divider orientation='vertical' style={{ background: '#BCB4AE'}}/>
                </Grid>
                <Grid sx={{flexGrow:1}}/>

                <Stack direction='column'>
                    <Button
                        startIcon={<EditRoundedIcon />}
                        variant='contained'
                        sx={{
                            color:'#7CB2B1',
                            textTransform:'none',
                            fontFamily:'arvo',
                            width:200,
                            backgroundColor:'transparent',
                            border:'1px solid #7CB2B1',
                            borderRadius:5
                        }}
                    >
                        Edit Info
                    </Button>

                    <div style={{height:10}}/>

                    <Button
                        startIcon={<RoomRoundedIcon />}
                        variant='contained'
                        sx={{
                            color:'#7CB2B1',
                            textTransform:'none',
                            fontFamily:'arvo',
                            width:200,
                            backgroundColor:'transparent',
                            border:'1px solid #7CB2B1',
                            borderRadius:5
                        }}
                    >
                        Track Me
                    </Button>
                    <div style={{height:10}}/>

                    <Button
                        variant='contained'
                        startIcon={<FaUserMd />}
                        sx={{
                            color:'#7CB2B1',
                            textTransform:'none',
                            fontFamily:'arvo',
                            width:200,
                            backgroundColor:'transparent',
                            border:'1px solid #7CB2B1',
                            borderRadius:5
                        }}
                    >
                        My  Vet
                    </Button>
                </Stack>
            </Stack>
        </Grid>

    </Grid>
  )
}

export default PetCard