import React from 'react';
import Stack from '@mui/material/Stack';
import { buttonTheme } from '../../components/MUIOverrides';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const HomeMain = () => {

  return (
    <>
      <div className='homepage-main'>
        <Grid container spacing={2}>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={5}>
            <div className='home-main-left-text'>
              Personalized Health Risk Prediction and Clinical Trial Access
            </div>
            <div className='home-main-left-button-group'>
              <Stack spacing={2}>
                <ThemeProvider theme={buttonTheme}>
                  <Button size='big' variant='contained' color='success'>Access your Health Risk</Button>
                  <Button size='big' variant='contained' color='info'>Explore Your Clinical Trials</Button>
                </ThemeProvider>
              </Stack>
            </div>
          </Grid>
          <Grid item xs={6}>            
          </Grid>
        </Grid>
      </div> 
      <div>
        <Grid container spacing={2}>
          <Grid item xs={4} className="home-banner-logo-box  home-banner">
            <div className="home-banner-text"><b>A</b> <b>L</b>iterature-driven <b>P</b>ersonal <b>H</b>ealth <b>A</b>ssistant</div>
          </Grid>
          <Grid item xs={1} className="home-banner-triangle">
          </Grid>
          <Grid item xs={7} className="home-banner-message-box home-banner-text font-white">  
            <div className="home-banner-text">Make data informed decisions on your healthy journey</div>
          </Grid>
        </Grid>
      </div> 
    </>    
  );
}

export default HomeMain;