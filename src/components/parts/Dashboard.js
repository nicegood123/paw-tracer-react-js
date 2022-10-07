import { Divider, Grid, Typography, IconButton } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import PetAvatarCard from '../cards/PetAvatarCard'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { SearchField } from '../forms/FormComponents';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PetCard from '../cards/PetCard';

const samplePets = [
    {
        id:1,
        pet_name:'Brownie',
        pet_type:'Dog',
        image_url:'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
        color:'Brown',
        height:'',
        weight:'',
        breed:'',
        status:'Unchecked',
    },
    {
        id:2,
        pet_name:'Sky',
        pet_type:'Dog',
        image_url:'https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg',
        color:'White-Brown',
        height:"2'1",
        weight:"15 Kg",
        breed:'Bulldog',
        status:'Verified',
    },
    {
        id:3,
        pet_name:'Top',
        pet_type:'Cat',
        image_url:'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg',
        color:'Black',
        height:"1'9",
        weight:'3 Kg',
        breed:'Bombay Cat',
        status:'Verified',
    },
    {
        id:4,
        pet_name:'Leo',
        pet_type:'Cat',
        image_url:'https://cattime.com/assets/uploads/2020/03/desert-lynx-mixed-cat-breed-pictures-1.jpg',
        color:'Biege',
        height:"1'11",
        weight:'3 Kg',
        breed:'Lynx',
        status:'Verified',
    },
    {
        id:5,
        pet_name:'Mr. Biggles',
        pet_type:'Dog',
        image_url:'https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/2/2020/11/shutterstock_1701805045-2-768x512.jpg',
        color:'Light-Brown',
        height:'',
        weight:'',
        breed:'',
        status:'Unchecked',
    },
]

const renderPetList = samplePets.map(({id, pet_name, pet_type, image_url, color, height, weight, breed, status}) => {
    return (
        <Grid item key={id} sx={{p:1, width:'100%'}}>
            <PetAvatarCard id={id} name={pet_name} type={pet_type} weight={weight} height={height} breed={breed} image={image_url} color={color} statsu={status} />
            <div style={{height:20}}/>
            <Divider />
        </Grid>
    )
})


const Dashboard = () => {
    const [search, setSearch] = React.useState('')
    const handleSearchChange = (event) => {
        setSearch(event.target.value)
      }
  return (
    <Grid 
        container 
        direction='column' 
        alignItems='center' 
        sx={{
            width:'100%',
            height:680, 
            border:'1px solid #E7E9EB',
            boxShadow:'4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38)',
            borderRadius:3, 
            pt: 2
        }}   
    >
        <Grid item sx={{width:'100%', pl:3, mb:2, pr:3}}>
            <Stack direction='row' alignItems='center'>

                <Typography variant='h5' sx={{fontFamily:'Arvo', flexGrow:1}}>
                    My Pets 
                </Typography>
                <Grid >
                    <Stack direction='row' sx={{backgroundColor:'#F0F2F5', width:300, p:2, pt: 0, pb:0, borderRadius:10,  border:'1px solid #E7E9EB',}} >
                        <SearchField
                            variant='outlined'
                            inputProps={{ style: { fontFamily: 'raleway',}}}
                            placeholder={'Search'}
                            value={ search } 
                            onChange={handleSearchChange}
                            size='small'
                        />
                        <IconButton color="secondary">
                            <SearchRoundedIcon sx={{ color:'gray' }} />
                        </IconButton>
                    </Stack>
                </Grid>
            </Stack>
           
        </Grid>
        <Grid item sx={{width:'100%'}}>
            <Divider />
        </Grid>
        <Stack direction='row' sx={{width:'100%'}}>
            <Grid item sx={{width:280, pl:2}}>
                <Stack direction='column' sx={{height:580,overflowY:'scroll'}}>
                    {renderPetList}
                    {renderPetList}
                </Stack>
            </Grid>
            <Grid item sx={{flexGrow:1}}>
                <Stack direction='column' alignItems='center' sx={{width:'100%', padding:5}}>
                    <Grid>
                        <PetCard />
                    </Grid>
                </Stack>
            </Grid>
        </Stack>
        
    </Grid>
  )
}

export default Dashboard