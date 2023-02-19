import React from 'react';
import Grid from '@mui/material/Grid';

const HomeInfo = () => {

  return (
    <>
      <div className='home-info-header'>
        Diagnosed with cancer? Try Alpha today!
      </div> 
      <div className='home-info-tile-box'>
        <Grid container spacing={6}>
          <Grid item xs={4} >
            <div className='home-info-tile'>
            <b>What is our own prognosis?</b>
            <p/>
            We will tell you the risks you currently have such as complications from treatment, recurrence of the cancer, development of secondary cancers, and psychological effects
            </div>
          </Grid>
          <Grid item xs={4} >
            <div className='home-info-tile'>
            <b>Is this treatment a good fit for me??</b>
            <p/>
            placeholder text
            placeholder text
            placeholder text
            </div>
          </Grid>
          <Grid item xs={4} >
            <div className='home-info-tile'>
            <b>What clinical trials am I eligible for?</b>
            <p/>          
            Information on clinical trials that the you may be eligible to participate in. You will access to experimental treatments that may not yet be available to the general public.
            </div>
          </Grid>
        </Grid>
      </div>
    </>    
  );
}

export default HomeInfo;