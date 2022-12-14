import * as React from 'react';
import {Box, Grid, Stack, IconButton, Tooltip} from '@mui/material/';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import { Avatar } from '@mui/material';

import {MdSpaceDashboard, MdLocationPin} from 'react-icons/md'
import {AiOutlineSetting} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BsFileEarmarkMedicalFill} from 'react-icons/bs'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


import Dashboard from '../parts/Dashboard';
import SubscriptionPlan from '../parts/SubscriptionPlan';
import Tracking from '../parts/Tracking';
import { navigate } from 'gatsby';

const drawerWidth = 260;
const mainMenu = [
    {
        id: 1,
        name: 'Dashboard'
    },
    {
        id: 2,
        name: 'Tracking'
    },
    {
        id: 3,
        name: 'Subscription'
    },
];
const Home = () => {

    const [selectedMenu, setSelectedMenu] = React.useState(1)
    const [menuName, setMenuName] = React.useState('Dashboard')
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
 
    const iconChanger = (menuName) => {
        
        if (menuName === 'Dashboard') {
            return <MdSpaceDashboard style={{fontSize:25, color: selectedMenu === 1 ? '#7CB2B1' : 'white'}}/>;
        }else if (menuName === 'Tracking') {
            return <MdLocationPin style={{fontSize:25, color: selectedMenu === 2 ? '#7CB2B1' : 'white'}}/>;
        }else{
            return <BsFileEarmarkMedicalFill style={{fontSize:23, color: selectedMenu === 3 ? '#7CB2B1' : 'white'}}/>;
        }  
         
        
    };

  return (
    <Box sx={{ display: 'flex', height:'100%' }}>
      <CssBaseline />

      {/* Top Bar */}
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, height:56, ml: `${drawerWidth}px`, backgroundColor:'white'}}
        elevation={0}
      >
        <Toolbar>
            <Grid container direction='row' alignItems='center' sx={{height:60}}>
                <Stack direction='row' alignItems='center' sx={{width:'100%'}}>
                    <Typography variant='h6' sx={{fontFamily:'Arvo', pl:2, color:'#7CB2B1' }}>
                        {menuName}
                    </Typography>
                    <div style={{flexGrow:1}}/>
                    <Tooltip title='Notifications'>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <IoMdNotificationsOutline style={{fontSize:28, color:'#7CB2B1' }}  />
                        </IconButton>
                    </Tooltip>
                    <div style={{width:2}}/>
                    <Tooltip title='Settings'>
                        <IconButton color="primary" aria-label="upload picture" component="label"  onClick={handleMenu}>
                            <AiOutlineSetting style={{fontSize:28, color:'#7CB2B1' }}  />
                        </IconButton>
                    </Tooltip>

                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      
                    >
                      <MenuItem onClick={handleClose} sx={{p2:5, pr:5}}>
                        <Stack direction='row' alignItems={'center'}>
                          <AccountCircleRoundedIcon />
                          <Typography variant='h6' sx={{fontFamily:'Raleway', ml:1}}>   Profile</Typography> 
                        </Stack>
                      </MenuItem>

                      <MenuItem onClick={() => navigate('/')} sx={{p2:5, pr:5}}>
                        <Stack direction='row' alignItems={'center'}>
                          <LogoutRoundedIcon />
                          <Typography variant='h6' sx={{fontFamily:'Raleway', ml:1}}>   Logout</Typography> 
                        </Stack>
                      </MenuItem>
                    </Menu>
                   
                    
                </Stack>
            </Grid>
        </Toolbar>
      </AppBar>

      {/* Side Bar | Side Drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: '1px solid white',
            backgroundColor:'rgba(124,178,176)'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        
        <Grid container direction='column' alignItems='center' sx={{width:'100%',pt:2, pb:2, mb:2, mt:2}}>
            <Stack direction='row' alignItems='center'>

                <Avatar 
                    sx={{width:50, height:50}} 
                    src="https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/241237118_2886399038279227_5824742503357049833_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mtP-RMmsNuYAX9SUD0S&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT8IThc-XrL6Sv4FtCtNm_7vBooZU4oX5h_JMSyOtXhLHw&oe=6345652E" 
                />
                <div style={{width:10}}/>
                <Stack direction='column'>
                    <Typography sx={{fontFamily:'arvo', fontSize:15, fontWeight:'bold', color: 'white'}}>
                        Ruinze Malinao
                    </Typography>
                    <Typography sx={{fontFamily:'Raleway', fontSize:13, fontWeight:'bold',color: 'white'}}>
                        Malinao_Ruinz
                    </Typography>
                </Stack>
            </Stack>
        </Grid>

        <Divider variant='middle' style={{ background: 'white', height:2 }}/>
       
        <List sx={{mt:2}}>
          {mainMenu.map(({id, name}) => (
            <ListItem key={id} disablePadding sx={{pl:1, pb:1}}>
              <ListItemButton onClick={() => {setSelectedMenu(id); setMenuName(name) } } sx={{backgroundColor:selectedMenu === id ? 'white' : '', borderRadius:'20px 0px 0px 20px'}}>
                <ListItemIcon>
                  {iconChanger(name)}
                </ListItemIcon>
                <ListItemText 
                    primary={
                        <Typography sx={{fontSize:15, fontFamily:'Arvo', color: selectedMenu === id ? '#7CB2B1' : 'white'}}>
                            {name}
                        </Typography>
                    } 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* End of side drawer */}

        {/* Box that holds the nmain contents */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, height:'100%'}}
      >
        <Toolbar />

        <Grid sx={{width:'100%', display: selectedMenu === 1 ? 'flex' : 'none',}}>
            <Dashboard />
        </Grid>

        <Grid sx={{width:'100%', display: selectedMenu === 2 ? 'flex' : 'none',}}>
            <Tracking />
        </Grid>

        <Grid sx={{width:'100%', display: selectedMenu === 3 ? 'flex' : 'none',}}>
            <SubscriptionPlan />
        </Grid>



      </Box>
      
    </Box>
  );
}


export default Home