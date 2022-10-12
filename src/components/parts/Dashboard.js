import { Divider, Grid, Typography, IconButton, Stack, Dialog, Tooltip} from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import React from 'react'
import PetAvatarCard from '../cards/PetAvatarCard'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { SearchField } from '../forms/FormComponents';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PetCard from '../cards/PetCard';
import MedicalRecordCard from '../cards/MedicalRecordCard';


const samplePets = [
    {
        id:1,
        pet_name:'Brownie',
        pet_type:'Dog',
        image_url:'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
        color:'Brown',
        height:0,
        weight:0,
        breed:'-',
        qr_code_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/640px-QR_code_for_mobile_English_Wikipedia.svg.png',
        status:'Unchecked',
    },
    {
        id:2,
        pet_name:'Sky',
        pet_type:'Dog',
        image_url:'https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg',
        color:'White-Brown',
        height:"2'1",
        weight:"15 ",
        breed:'Bulldog',
        qr_code_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/640px-QR_code_for_mobile_English_Wikipedia.svg.png',
        status:'Verified',
    },
    {
        id:3,
        pet_name:'Top',
        pet_type:'Cat',
        image_url:'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg',
        color:'Black',
        height:"1'9",
        weight:'3 ',
        breed:'Bombay Cat',
        qr_code_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/640px-QR_code_for_mobile_English_Wikipedia.svg.png',
        status:'Verified',
    },
    {
        id:4,
        pet_name:'Leo',
        pet_type:'Cat',
        image_url:'https://cattime.com/assets/uploads/2020/03/desert-lynx-mixed-cat-breed-pictures-1.jpg',
        color:'Biege',
        height:"1'11",
        weight:'3 ',
        breed:'Lynx',
        qr_code_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/640px-QR_code_for_mobile_English_Wikipedia.svg.png',
        status:'Verified',
    },
    {
        id:5,
        pet_name:'Mr. Biggles',
        pet_type:'Dog',
        image_url:'https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/2/2020/11/shutterstock_1701805045-2-768x512.jpg',
        color:'Light-Brown',
        height:0,
        weight:0,
        breed:'-',
        qr_code_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/640px-QR_code_for_mobile_English_Wikipedia.svg.png',
        status:'Unchecked',
    },
    {
        id:6,
        pet_name:'Brownie',
        pet_type:'Dog',
        image_url:'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
        color:'Brown',
        height:0,
        weight:0,
        breed:'-',
        qr_code_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/640px-QR_code_for_mobile_English_Wikipedia.svg.png',
        status:'Unchecked',
    },
    {
        id:7,
        pet_name:'Sky',
        pet_type:'Dog',
        image_url:'https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg',
        color:'White-Brown',
        height:"2'1",
        weight:"15 ",
        breed:'Bulldog',
        qr_code_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/640px-QR_code_for_mobile_English_Wikipedia.svg.png',
        status:'Verified',
    },
    {
        id:8,
        pet_name:'Top',
        pet_type:'Cat',
        image_url:'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg',
        color:'Black',
        height:"1'9",
        weight:'3 ',
        breed:'Bombay Cat',
        qr_code_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/640px-QR_code_for_mobile_English_Wikipedia.svg.png',
        status:'Verified',
    },
    {
        id:9,
        pet_name:'Leo',
        pet_type:'Cat',
        image_url:'https://cattime.com/assets/uploads/2020/03/desert-lynx-mixed-cat-breed-pictures-1.jpg',
        color:'Biege',
        height:"1'11",
        weight:'3 ',
        breed:'Lynx',
        qr_code_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/640px-QR_code_for_mobile_English_Wikipedia.svg.png',
        status:'Verified',
    },
    {
        id:10,
        pet_name:'Mr. Biggles',
        pet_type:'Dog',
        image_url:'https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/2/2020/11/shutterstock_1701805045-2-768x512.jpg',
        color:'Light-Brown',
        height:0,
        weight:0,
        breed:'-',
        qr_code_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/640px-QR_code_for_mobile_English_Wikipedia.svg.png',
        status:'Unchecked',
    },
    
]

const Dashboard = () => {
    const theme = useTheme();
    const medium = useMediaQuery(theme.breakpoints.down(1370));
    const [search, setSearch] = React.useState('')

    const [petID, setPetID] = React.useState('')
    const [petName, setPetName] = React.useState('')
    const [petWeight, setPetWeight] = React.useState('')
    const [petHeight, setPetHeight] = React.useState('')
    const [petBreed, setPetBreed] = React.useState('')
    const [petColor, setPetColor] = React.useState('')
    const [petStatus, setPetStatus] = React.useState('')
    const [petImage, setPetImage] = React.useState('')
    const [petQR, setPetQR] = React.useState('')
    const [petType, setPetType] = React.useState('')

    const [open, setOpen] = React.useState(false);
    //function for opening and closing the dialog
    const handleClickOpen = () => {
    setOpen(true);

    };
      
    //Function for closing the create user dialog
    const handleClose = () => {
    setOpen(false);
    };

    const handlePetCardChange = (id, name, type, height, weight, breed, color, image, qr, status) => {
        setPetID(id);
        setPetName(name);
        setPetType(type);
        setPetWeight(weight);
        setPetHeight(height);
        setPetBreed(breed);
        setPetColor(color);
        setPetQR(qr);
        setPetStatus(status);
        setPetImage(image);
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    };
  return (
    <Grid 
        container 
        direction='column' 
        alignItems='center' 
        sx={{
            width:'100%',
            height:'100%', 
            
        }}   
    >
        <Grid item sx={{width:'100%', pl:2, mb:2}}>
            <Stack direction='row' alignItems='center'>

                <Typography variant='h4' sx={{fontFamily:'Arvo', flexGrow:1}}>
                    My Pets
                </Typography>

                <Grid>
                    <Stack direction='row' sx={{backgroundColor:'#F0F2F5', width:280, p:2, pt: 0, pb:0, borderRadius:10,  border:'1px solid #E7E9EB',}} >
                        <SearchField
                            variant='outlined'
                            inputProps={{ style: { fontFamily: 'raleway',}}}
                            placeholder={'Search name or ID'}
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

        <Stack 
            direction='row' 
            sx={{
                width:'100%', 
                height:'100%',
                border:'2px solid #E7E9EB',
                // boxShadow:'4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38)',
                borderRadius:3,
                }}
        >

            <Grid item sx={{width:280,minHeight:280,height:'100%', borderRight:'2px solid #E7E9EB', borderBottom:'2px solid #E7E9EB'}}>
                <List >
                    {
                        samplePets.map(({id, pet_name, pet_type, image_url, color, height, weight, breed, qr_code_url, status}) => {
                            return (
                                <Grid item key={id} sx={{p:1, width:'100%'}}>
                                    <ListItem key={id} disablePadding sx={{ pb:1}}>
                                        <ListItemButton onClick={() => handlePetCardChange(id, pet_name, pet_type, height, weight, breed, color,image_url,  qr_code_url, status)}>
                                            <PetAvatarCard id={id} name={pet_name} image={image_url}/>
                                        </ListItemButton>
                                    </ListItem> 
                                    <Divider />
                                </Grid>
                            )
                        })
                    }
                </List>
            </Grid>

            <Grid item sx={{height:'100%'}}>
                <Divider orientation='vertical'/>
            </Grid>

            <Grid item sx={{flexGrow:1}}>
                <Stack direction='column' alignItems='left' sx={{width:'100%', padding:5, pt:3}}>
                    <Stack direction={medium?'column':'row'} sx={{width:'100%'}}>
                       

                        <Stack direction='column' sx={{width:'100%'}}>
                            <Grid sx={{width:'100%',mt:3}}>
                                <Typography variant='h4' sx={{fontFamily:'Raleway', color:'#19585F',fontWeight:'bold'}}>
                                    Pet Details
                                </Typography>
                            </Grid>

                            <Grid sx={{width:'100%', maxWidth:680}}>
                                <Divider />
                            </Grid>

                            <Grid sx={{mt: 2}}>
                                <PetCard id={petID} name={petName} type={petType} weight={petWeight} height={petHeight} breed={petBreed} image={petImage} color={petColor} status={petStatus} qr={petQR}/>
                            </Grid>

                        </Stack>

                        <Stack direction='column' sx={{width:'100%', ml: medium ? 0 :3}}>
                            <Grid sx={{width:'100%',mt:3}}>
                                <Typography variant='h4' sx={{fontFamily:'Raleway', color:'#19585F',fontWeight:'bold'}}>
                                    Recent Locations
                                </Typography>
                            </Grid>

                            <Grid sx={{width:'100%'}}>
                                <Divider />
                            </Grid>

                            <Grid sx={{width:'100%', height:430, border: '1px solid black', mt:2, borderRadius:5}}>

                            </Grid>
                        </Stack>
                    </Stack>

                    <Grid item sx={{height:'100%',mt:5, mb:1}}>
                        <Typography variant='h4' sx={{fontFamily:'Raleway', color:'#19585F', fontWeight:'bold'}}>
                            Medical History
                        </Typography>
                    </Grid>

                    <Grid item sx={{width:'100%'}}>
                        <Divider />
                    </Grid>

                    <Grid sx={{mt:1, mb:10}}>
                        <MedicalRecordCard />
                        <MedicalRecordCard />
                        <MedicalRecordCard />
                    </Grid>
                </Stack>
            </Grid>

        </Stack>

        <Tooltip title='Add new Pet'>
            
            <IconButton
                onClick={() => handleClickOpen()}
                variant='contained'
                sx={{
                    color:'white',
                    textTransform:'none',
                    fontFamily:'arvo',
                    backgroundColor:'#7CB2B1',
                    position:'fixed',
                    bottom:40,
                    right:40,
                }}
            >
            <AddRoundedIcon sx={{fontSize:medium ? 40 : 60, color:'white'}}/>
            </IconButton>
        </Tooltip>

        <Dialog open={open} onClose={handleClose} scroll='body'>
          
        </Dialog>
        
    </Grid>
  )
}

export default Dashboard