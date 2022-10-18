import { Stack, Grid, Typography, IconButton, List, ListItem, ListItemButton, Divider } from '@mui/material'
import React, { useState } from 'react'
import PetTrackCard from '../cards/PetTrackCard'
import PeSelectedtTrackCard from '../cards/PetSelectedTrackCard'
import PetMap from './PetMap'
import TrackMe from './TrackMe'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const samplePets = [
    {
        id:1,
        pet_name:'Brownie',
        image_url:'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
        longitude: '-',
        latitude: '-',
        collar_status: 0,
    },
    {
        id:2,
        pet_name:'Sky',
        image_url:'https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg',
        longitude: '7.053506026220152 ',
        latitude: '125.56282560206422',
        collar_status: 1,
    },
    {
        id:3,
        pet_name:'Top',
        image_url:'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg',
        longitude: '-',
        latitude: '-',
        collar_status: 0,
    },
    {
        id:4,
        pet_name:'Leo',
        image_url:'https://cattime.com/assets/uploads/2020/03/desert-lynx-mixed-cat-breed-pictures-1.jpg',
        longitude: '7.053446671928238',
        latitude: '125.56285032225432',
        collar_status: 1,
    },
    {
        id:5,
        pet_name:'Mr. Biggles',
        image_url:'https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/2/2020/11/shutterstock_1701805045-2-768x512.jpg',
        longitude: '7.053434801068953 ',
        latitude: '125.56295319014205',
        collar_status: 1,
    },
    
]

const Tracking = () => {

    const [petID, setPetID] = useState('');
    const [petName, setPetName] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [image, setImage] = useState('');
    const [petSelect, setPetSelect] = useState(false);
    
    const handleBack = () => {
        setPetSelect(false)
    }

    const handlePetSelect = (id, name, image, long, lati) => {
        setPetSelect(true)
        setPetName(name)
        setImage(image)
        setPetID(id)
        setLongitude(long)
        setLatitude(lati)

        console.log(id+ name+ image+ long+ lati)
    }

  return (
    <Stack
        direction='row'
        sx={{width:'100%'}}
    > 

        <Grid 
            item 
            sx={{
                
                flexGrow:1,
                height:'89vh',
                border:'1px solid #E7E9EB',
                boxShadow:'2.0px 4.0px 4.0px hsl(0deg 0% 0% / 0.38)',
                borderRadius:'15px 0px 0px 15px',
                overflowY:'scroll',
            }}
        >
            <Grid sx={{display:petSelect ? 'flex' : 'none'}}>
                <IconButton onClick={()=>handleBack()}>
                    <ArrowBackRoundedIcon sx={{fontSize:40}}/>
                </IconButton>
            </Grid>

            <Grid sx={{display:petSelect ? 'flex' : 'none'}}>
                <PeSelectedtTrackCard id={petID} name={petName} image={image} longitude={longitude} latitude={latitude}/>
            </Grid>

            
            
            <Grid sx={{display:petSelect ? 'none' : ''}}>
                <Typography  variant='h4' sx={{fontFamily:'Arvo', mb:2, mt:3, ml:3}}>
                    My Pets
                </Typography> 

                <List sx={{width:'100%', p:0}}>
                    <Divider />
                    {
                    samplePets.map(({id, pet_name, image_url, longitude, latitude, collar_status}) => {
                        return (
                            <Grid item key={id} sx={{width:'100%'}}>
                                <ListItem key={id} disablePadding >
                                    <ListItemButton 
                                        onClick={() => {

                                                collar_status === 1 ? handlePetSelect(id, pet_name, image_url, longitude, latitude) : console.log('Hello')
                                            }
                                        } 
                                    >
                                        <PetTrackCard name={pet_name} image={image_url} longitude={longitude} latitude={latitude} track={collar_status} handleClick={(id, name, image, long, lati)=>handlePetSelect(id, name, image, long, lati)} />
                                    </ListItemButton>
                                </ListItem> 
                                <Divider/>
                            </Grid>
                        )
                    })
                }
                </List>
                
            </Grid>
        </Grid>

        <Grid 
            item 
            sx={{
                width:1000,
                border:'1px solid #E7E9EB',
                boxShadow:'2.0px 4.0px 4.0px hsl(0deg 0% 0% / 0.38)',
                borderRadius:'0px 15px 15px 0px',
                overflow:'hidden',
                display:petSelect ? 'none' : ''
            }}
            >
            <PetMap />
        </Grid>

        <Grid 
            item 
            sx={{
                width:860,
                border:'1px solid #E7E9EB',
                boxShadow:'2.0px 4.0px 4.0px hsl(0deg 0% 0% / 0.38)',
                borderRadius:'0px 15px 15px 0px',
                overflow:'hidden',
                display:petSelect ? '' : 'none'
            }}
            >
            <TrackMe longitude={longitude} latitude={latitude} name={petName}/>
        </Grid>
    </Stack>
  )
}

export default Tracking