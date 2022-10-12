import React from 'react'
import { styled } from '@mui/material/styles';
import {Grid, Stack, Tooltip } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {RiHospitalFill, RiCalendarFill} from 'react-icons/ri'
import {FaUserMd} from 'react-icons/fa';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const MedicalRecordCard = ({question, answer}) => {
    const theme = useTheme();
    const medium = useMediaQuery(theme.breakpoints.down(1370));
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
        <Card sx={{ 
                width: '100%',
                border:'1px solid #7CB2B1',
                height:'100%',
                // boxShadow:'2.0px 4.0px 4.0px hsl(0deg 0% 0% / 0.38)',
                borderRadius:3,
                mt:2,
                maxWidth:1400,
            }}
        >
            <CardContent>

            <Grid container direction={'row'} alignItems='center' >
                
                <Grid item sx={{ flexGrow:1, pt:1, maxWidth:{xs:200, sm:300, md:520} }}>
                    <Stack direction='row'>
                        <RiHospitalFill style={{fontSize:medium ? 18 : 23, color:'#7CB2B1'}}/>
                        <Typography
                            variant={medium ? 'caption' : 'h6'}
                            align='center'
                            sx={{fontFamily:'Raleway', color:'#19585F', ml:1, fontWeight:'bold'}}
                            gutterBottom
                        >
                            Bark Central Vet Clinic    
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item sx={{ flexGrow:1}} />


                <Grid item sx={{ flexGrow:1, pt:1, maxWidth:{xs:200, sm:300, md:520} }}>
                    <Stack direction='row' alignItems='center'>
                        <FaUserMd style={{fontSize:medium ? 18 : 23, color:'#7CB2B1'}}/>
                        <Typography
                            variant={medium ? 'caption' : 'h6'}
                            align='left'
                            sx={{fontFamily:'Raleway', color:'#19585F', ml:1, fontWeight:'bold'}}
                            gutterBottom
                        >
                            Doc. ALexander Xavier Deguzman    
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item sx={{ flexGrow:1}} />


               
                <Grid item sx={{ mr:2, pt:1, maxWidth:{xs:200, sm:300, md:520} }}>
                    <Stack direction='row' alignItems='center'>
                        <RiCalendarFill style={{fontSize:medium ? 18 : 23, color:'#7CB2B1'}}/>
                        <Typography
                            variant={medium ? 'caption' : 'h6'}
                            align='left'
                            sx={{fontFamily:'Raleway', color:'#19585F', ml:1, fontWeight:'bold'}}
                            gutterBottom
                        >
                            02/16/2022    
                        </Typography>
                    
                    </Stack>
                </Grid>

            

                <Grid item>
                    <Tooltip title={ expanded ? 'Close': 'View Details'}>
                        <CardActions disableSpacing>
                            <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            >
                                <ExpandMoreIcon sx={{fontSize:30}} />
                            </ExpandMore>
                        </CardActions>
                    </Tooltip>
                </Grid>
            </Grid>
        </CardContent>
        
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Stack direction='row'>
              <Stack direction='column' sx={{ paddingLeft: 2 }}>
                <Typography
                    variant={medium ? 'body1' : 'h6'}
                    align='left'
                    sx={{fontFamily:'Raleway', color:'#19585F', ml:1, fontWeight:'bold'}}
                    gutterBottom
                >
                    Observations:  
                </Typography>
                <Typography
                    variant={medium ? 'caption' : 'body1'}
                    sx={{fontFamily:'Raleway', color:'#19585F', ml:3, mb:3}}
                    gutterBottom
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                </Typography>

                <Typography
                    variant={medium ? 'body1' : 'h6'}
                    align='left'
                    sx={{fontFamily:'Raleway', color:'#19585F', ml:1, fontWeight:'bold'}}
                    gutterBottom
                >
                    Vital Signs:
                </Typography>
                <Typography
                    variant={medium ? 'caption' : 'body1'}
                    align='left'
                    sx={{fontFamily:'Raleway', color:'#19585F', ml:3, mb:3}}
                    gutterBottom
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                </Typography>


                <Typography
                    variant={medium ? 'body1' : 'h6'}
                    align='left'
                    sx={{fontFamily:'Raleway', color:'#19585F', ml:1, fontWeight:'bold'}}
                    gutterBottom
                >
                    Diagnosis:
                </Typography>
                <Typography
                     variant={medium ? 'caption' : 'body1'}
                    align='left'
                    sx={{fontFamily:'Raleway', color:'#19585F', ml:3, mb:3}}
                    gutterBottom
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                </Typography>


                <Typography
                    variant={medium ? 'body1' : 'h6'}
                    align='left'
                    sx={{fontFamily:'Raleway', color:'#19585F', ml:1, fontWeight:'bold'}}
                    gutterBottom
                >
                    Prescriptions:
                </Typography>
                <Typography
                     variant={medium ? 'caption' : 'body1'}
                    align='left'
                    sx={{fontFamily:'Raleway', color:'#19585F', ml:3, mb:3}}
                    gutterBottom
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                </Typography>

              </Stack>
            </Stack>
          </CardContent>
        </Collapse>
      </Card>
    );
}

export default MedicalRecordCard