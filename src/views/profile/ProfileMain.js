import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Demographics from './demographics/Demographics';
import Biopsies from './biopsies/Biopsies';
import Conditions from './conditions/Conditions';
import ImageTests from './imageTests.js/ImageTests';
import LabTests from './labTests/LabTests';
import Symptoms from './symptoms/Symptoms';
import Treatments from './treatments/Treatments';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const drawerWidth = 240;

let profile = {
  demographics: {
    birthday: null,
    sex: 'male'
  },
  conditions: {
    key: 1
  }
}

export default function PermanentDrawerLeft() {
  const [selectedNav, setSelectedNav] = React.useState('Demographics');

  const handleClick = (text) => {
    setSelectedNav(text);
  }

  const handleProfileUpdate = (newProfile) => {
    profile = Object.assign(profile, newProfile);
    console.log(profile);
  }

  const conditionalRendering = () => {
    switch (selectedNav) {
      case 'Demographics':
        return <Demographics profile={profile} handleProfileUpdate={handleProfileUpdate} />
      case 'Conditions':
        return <Conditions />
      case 'Lab Tests': 
        return <LabTests />
      case 'Image Tests':
        return <ImageTests />
      case 'Biopsies':
        return <Biopsies />
      case 'Treatments':
        return <Treatments />
      case 'Symptoms':
        return <Symptoms />
    }
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          top: 'none',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            top: 'auto',
          },
          '& .MuiToolbar-root': {
            display: 'none',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Demographics', 'Conditions', 'Lab Tests', 'Image Tests', 'Biopsies', 'Treatments', 'Symptoms'].map((text, index) => (
            <ListItem key={text} disablePadding>
              {text === selectedNav && (
              <ListItemButton selected onClick={() => handleClick(text)}>
                <ListItemIcon>
                  <ArrowCircleRightIcon />
                </ListItemIcon>
                <ListItemText selected primary={text} sx={{ 'span': {fontWeight: 'bold'}}}/>
              </ListItemButton>
              )
              }
              {text !== selectedNav && (
                <ListItemButton onClick={() => handleClick(text)}>
                  <ListItemIcon>
                    <ArrowCircleRightOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText selected primary={text} sx={{}}/>
                </ListItemButton>
                )
              }
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, marginLeft: '100px'}}
      >
        {conditionalRendering()}
      </Box>
    </Box>
  );
}
