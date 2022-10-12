import { Grid, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import Dog from '../../images/dog.png'
import Cat from '../../images/cat.png'

const SubscriptionCard = ({id, price, title, description}) => {
  return (
    <Grid
        container
        direction='column'
        alignItems='center'
        sx={{
            width:300,
            height:410,
            backgroundColor:'#FAF8F6',
            border:'2px solid #7CB2B1',
            boxShadow:'4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38)',
            borderRadius:3,
        }}
    >
        <img 
          //src='https://static.wixstatic.com/media/fa0bcc99a6db89f23698e356db6d1c66.png/v1/fill/w_560,h_496,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Peeping%20Dog.png' 
          //src='https://bullymake.com/assets/img/tbg-dog.png'
          src={id === 1 ? Dog : Cat}
          alt='animal_image' 
          style={{
            width:130, 
            height:160, 
            marginButtom:'-20px',
            position:'relative',
            top: id === 1 ? '-70px' : '-80px',
            filter: `drop-shadow(8px 1px 4px #A6A6A6)`
          }}
        />

        <Grid 
          item
          sx={{
            width:170,
            height:130,
            backgroundColor:'white',
            border:'1px solid #E7E9EB',
            boxShadow:'4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38)',
            borderRadius:4,
            mt:'-107px',
          }}
        >
          <Stack direction='column' alignItems='center' sx={{width:'100%'}}>
            <Stack direction='row' alignItems='center' sx={{mt:3}}>
              <Typography variant='h6' sx={{height:60, pt:1,  fontFamily:'Roboto Serif', fontWeight:'800'}}>
                ₱
              </Typography>
              <Typography variant='h3'sx={{height:60,  fontFamily:'Roboto Serif', fontWeight:'800'}}>
                {price}
              </Typography>
            </Stack>
            <Typography variant='h5'sx={{height:60, color: '#19585F', fontFamily:'Arvo', fontWeight:'bold', mt:'-5px'}}>
                {title}
            </Typography>
          </Stack>
        </Grid>

        <Grid item sx={{width:'100%', height:140, p:2, mt:2}}>
          <Typography  align='center' sx={{fontFamily:'Roboto Serif', fontSize:13}}>
            {description}
          </Typography>
        </Grid>

        <Grid item >
          <Button
            variant='contained'
            sx={{
                color:'white',
                textTransform:'none',
                fontFamily:'arvo',
                width:200,
                backgroundColor:'#19585F',
                border:'1px solid #7CB2B1',
                borderRadius:5
            }}
          >
              Subscribe Now!
          </Button>
</Grid>
    </Grid>
  )
}

export default SubscriptionCard