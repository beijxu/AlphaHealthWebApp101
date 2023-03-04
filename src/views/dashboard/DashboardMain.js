import React from 'react';
import Grid from '@mui/material/Grid';
import Dashboard from './Dashboard.tsx';
import { ProfileHome } from './profile/ProfileHome';


const DashboardMain = () => {

  return (
    <>
      <div className='dashboard-main'>
        <Grid container spacing={10}>
          <Grid item xs={7}>
            <Dashboard/>
          </Grid>
          <Grid item xs={5}>
            <ProfileHome />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default DashboardMain;