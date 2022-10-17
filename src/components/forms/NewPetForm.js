import { Grid, TextField, Stack, DialogTitle, DialogActions,  DialogContent, Input, Divider, Button, Select, FormControl, InputLabel, MenuItem, Typography, IconButton, Tooltip  } from '@mui/material'
import React, {useState} from 'react'
import {MdCancel} from 'react-icons/md';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

// Form and Data Handling
import {useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


//Schema: Rules for inputs
const schema = yup.object({
  pet_name: yup.string().required('pet name is required'),
  weight: yup.string().required('weight is required'),
  height: yup.string().required('height name is required'),
  pet_type: yup.string().required('pet type is required'),
  color: yup.string().required('pet color is required'),
});


const NewPetForm = ({onClose, toast}) => {

    //Initialization for image
    const [imageUpload, setImageUpload] = useState('https://media.istockphoto.com/vectors/heart-shape-or-love-symbol-in-animal-paw-print-for-pet-care-icon-vector-id1142468738?k=20&m=1142468738&s=612x612&w=0&h=_Mu8PsiJS20wUYSMqRPxluwh4pk5QEAqJ8LF8YaKRfk=');
    const [petName, setPetName] = useState('');
    const [petWeight, setPetWeight] = useState('');
    const [petHeight, setPetHeight] = useState('');
    const [petType, setPetType] = useState('Cat');
    const [petColor, setPetColor] = useState('');

    function handleImageChange(e) {
        if(e.target.files && e.target.files[0]){
            let reader = new FileReader()
            reader.onload = function(e){
                setImageUpload(e.target.result)
                console.log(e.target.result)
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }

    //For react hook form
    const {register, handleSubmit} = useForm({
    resolver: yupResolver(schema)
    });
  const onSubmit = (data) => {

    //saving teh data frok the form ans making a body taht will be pass on and use in the http request for storing a new instance of a user.
    const input = {
    'pet_name': data.pet_name,
    'pet_type': data.pet_type,
    'weight': data.weight,
    'color': data.color,
    'height': data.height,
    'image': imageUpload,
    'breed': '-',
    'status': 'Unverified',
    }

    console.log('New Pet was successfully added.');
    console.log(input);
    onClose();

    
};

  return (
    <Grid sx={{height:700, overflow: 'hidden'}}>
        <Stack direction='column' alignItems='center' sx={{ width: '100%' }}>
            <Grid item sx={{width:'100%', p:1}}>
                <Stack direction='row' sx={{pt:1}}>
                    <DialogTitle sx={{flexGrow:1}}>
                        <Typography sx={{fontFamily:'arvo', fontSize:25}}>
                            New Pet Form
                        </Typography>
                    </DialogTitle>
                    <Tooltip title='close' >
                        <IconButton onClick={() => onClose()} sx={{width:50, height:50, }}>
                            <MdCancel style={{fontSize:35, color: '#d7dbde'}} />
                        </IconButton>
                    </Tooltip>
                    
                </Stack>
            </Grid>

            <Grid item sx={{ width: '100%' }}>
                <Divider light />
            </Grid>
        </Stack>

        <form style={{width:'100%'}} onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction='column' alignItems='center' sx={{width: 500, height:'100%', p:4, pt:0}}>

            {/* For Image preview*/}
            <Grid item >
                <DialogContent>
                    <Grid container  sx={{border:'3px solid black', width: 150, height:150, borderRadius:50, overflow:'hidden'}}> 
                        <Grid item >
                            <img src={imageUpload} alt='uploaded_image' style={{width: 150, height:150}}/>
                        </Grid>
                    </Grid>  
                </DialogContent>
            </Grid>

            {/* For Uploading Image*/}
            <Grid item sx={{position:'relative', top:'-140px', left: 70}}>
                <DialogContent sx={{ overflow: 'hidden' }}>
                    <Tooltip title='Upload pet image'>
                        <IconButton  aria-label="upload picture" component="label" sx={{backgroundColor:'#7CB2B1'}} >
                            <input hidden accept="image/*" type="file" onChange={handleImageChange} />
                            <PhotoCamera sx={{color:'white', fontSize:30}}/>
                        </IconButton>
                    </Tooltip>
                </DialogContent>
            </Grid>

            <div style={{height:15}} />
            <Grid item style={{ width:'100%', position:'relative', top:'-90px'}}>
                <TextField 
                    {...register("pet_name")}
                    type='text'
                    label={'Pet Name'} 
                    style={{ width: '100%' }}
                    value={petName}
                    placeholder="Enter your pet's name"
                    onChange={(event) => setPetName(event.target.value)}
                    size='regular'
                    required
                />
            </Grid>
            
            <div style={{height:15}} />
            <Stack direction='row' sx={{position:'relative', top:'-90px'}}>
                <Grid item style={{ width:'100%'}}>
                    <TextField 
                        {...register("weight")}
                        label={'Pet Weight'} 
                        style={{ width: '100%' }}
                        value={petWeight}
                        placeholder="Enter weight in Kg"
                        onChange={(event) => setPetWeight(event.target.value)}
                        size='regular'
                        required
                    />
                </Grid>
                <div style={{width:10}} />
                <Grid item style={{ width:'100%'}}>
                    <TextField 
                        {...register("height")}
                        label={'Pet Height'}
                        placeholder="Enter height in foot" 
                        style={{ width: '100%' }}
                        value={petHeight}
                        onChange={(event) => setPetHeight(event.target.value)}
                        size='regular'
                        required
                    />
                </Grid>
            </Stack>

            <div style={{height:15}} />
            <Grid item  sx={{ width:'100%', position:'relative', top:'-90px' }}>
                <FormControl variant="outlined" sx={{ width:'100%' }}>
                <InputLabel id="demo-simple-select-helper-label">Pet Type</InputLabel>
                <Select
                    {...register("pet_type")}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label='Pet Type'
                    size='regular'
                    value={petType}
                    onChange={(event) => setPetType(event.target.value)}
                >
                    <MenuItem value={'Cat'}>
                        Cat
                    </MenuItem>
                    <MenuItem value={'Dog'}>
                        Dog
                    </MenuItem>
                </Select>
                </FormControl>
            </Grid>
            

            <div style={{height:15}} />
            <Grid item style={{ width:'100%', position:'relative', top:'-90px'}}>
                <TextField 
                    {...register("color")}
                    type='text'
                    label={'Pet Color'} 
                    style={{ width: '100%' }}
                    value={petColor}
                    onChange={(event) => setPetColor(event.target.value)}
                    size='regular'
                    required
                />
            </Grid>

        </Grid>

        <DialogActions sx={{ pr:4, pb:2, position:'relative', top:'-80px' }}>
            <Button type='button' onClick={()=>onClose()} sx={{ height:45, minWidth:40, borderRadius:1, color: 'black', backgroundColor:'transparent', fontFamily:'Playfair Display', textTransform:'NONE'}}>
                Discard
            </Button>
            <Button variant='contained' type='submit'  sx={{ height:45, minWidth:40, borderRadius:1, color: 'white', textTransform:'none', fontFamily:'Playfair Display',}}>
                Submit
            </Button>
        </DialogActions>
        </form>
   
    </Grid>
  )
}

export default NewPetForm