import React from 'react';
import Grid from '@mui/material/Grid';
import Dashboard from './Dashboard.tsx';

const DashboardMain = () => {

  return (
    <>
      <div className='dashboard-main'>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Dashboard/>
          </Grid>
          <Grid item xs={5}>
            dd
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default DashboardMain;