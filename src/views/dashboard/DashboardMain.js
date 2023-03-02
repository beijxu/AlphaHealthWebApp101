import React from 'react';
import Grid from '@mui/material/Grid';
import Dashboard from './Dashboard.tsx';
import HealthProfile from './profile/HealthProfile.tsx';


const DashboardMain = () => {

  return (
    <>
      <div className='dashboard-main'>
        <Grid container spacing={10}>
          <Grid item xs={7}>
            <Dashboard/>
          </Grid>
          <Grid item xs={5}>
            <HealthProfile />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default DashboardMain;