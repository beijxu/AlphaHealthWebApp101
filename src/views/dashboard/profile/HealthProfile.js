import * as React from 'react';
import Divider from '@mui/material/Divider';
import CancerProfile from './CancerProfile';
import SerumHistory from './SerumHistory';
import { buttonTheme } from '../../../components/MUIOverrides';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';


const HealthProfile = () => {
    const age = 62;
    const sex = 'male';
    const race = 'black';
    const maritalStatus = 'married';
    return (
      <>
        <b>Your health profile</b>
        <p/>
        <span className='font-tiny'>(A more completed health profile enables more personalized results)</span>
        <p />
        <Divider/>
        <p/>
        <b>Demographics</b>
        <p/>
        <span style={{ minWidth: '200px', display: 'inline-block'}}>Age: {age}</span>
        <span>Sex: {sex}</span>
        <p/>
        <span style={{ minWidth: '200px', display: 'inline-block'}}>Race: {race}</span>
        <span>Marital status: {maritalStatus}</span>
        <p/>
        <Divider />
        <p/>
        <CancerProfile />
        <Divider />
        <p />
        <SerumHistory />
        <Divider />
        <p />
        <ThemeProvider theme={buttonTheme}>
              <Button size="small" variant="contained" color="success">Modify Profile</Button>
        </ThemeProvider>
      </>
    );
  }
  
  export default HealthProfile;