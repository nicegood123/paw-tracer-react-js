import { Grid, Typography, Stack } from '@mui/material'
import React from 'react'
import SubscriptionCard from '../cards/SubscriptionCard'

const subscriptionsList = [
    {
        id:1,
        price:'50',
        title:'Lite Plan',
        description:"With PawTracer's Lite plan, you can activate the Live tracking feature of your pet's collars, allowing you to monitor your pet's location for 10 days.",
    },
    {
        id:2,
        price:'100',
        title:'Full Plan',
        description:"With Full plan, you can now activate the Live tracking  and safe zone feature, allowing you to monitor your pet's location in a specific zone for 30 days.",
    },
    
];

const SubscriptionPlan = () => {
  return (
    <Grid 
        container 
        direction='column' 
        alignItems='center'
        sx={{
            width:'100%',
            mt:'-20px',
        }}
    >
        <Typography
            variant='body1'
            sx={{
                fontFamily:'raleway',
                fontWeight:'bold',
                letterSpacing: 2,
                color:'#696765'
            }}
        >
            CHOOSE YOUR
        </Typography>
        <Typography
            variant='h4'
            sx={{
                fontFamily:'Fredoka One',
                fontWeight:'800',
                color:'#19585F',
                mb:12
            }}
        >
            SUBSCRIPTION PLAN
        </Typography>
        <Stack 
        direction='column' 
        alignItems='center' 
        sx={{
                width:'100%', 
                // border:'2px solid #E7E9EB',
                // borderRadius:3, 
                p:17, 
                pt:12, 
                pb:3, 
                mt:'-80px'
            }}
        >
            <Stack direction='row'alignItems={'center'}>
                {
                    subscriptionsList.map(({id, price, title, description}) => {
                        return(
                            <Grid item key={id} sx={{mr: id===1?10:0}}>
                                <SubscriptionCard id={id} price={price} title={title} description={description} />
                            </Grid>
                        );
                    })
                }
            </Stack>
        </Stack>
        

    </Grid>
  )
}

export default SubscriptionPlan