import React, { useState } from "react";
import Divider from '@mui/material/Divider';
import EditCancerProfile from './EditCancerProfile';
import SerumHistory from './SerumHistory';
import { buttonTheme } from '../../../components/MUIOverrides';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { healthProfileInputTheme } from '../../../components/MUIOverrides';
import { ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const EditProfile = ({onSaveCallback}) => {
    
    const [race, setRace] = useState('Black');
    const onRaceChange = (event) => {
        setRace(event.target.value);
    }

    const [marritalStatus, setMarritalStatus] = useState('married');
    const onMarritalStatusChange = (event) => {
        setMarritalStatus(event.target.value);
    }

    const [sex, setSex] = useState('male');
    const onSexChange = (event) => {
        setSex(event.target.value);
    }

    const onSaveClick = () => {
        onSaveCallback();
    }

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
        <ThemeProvider theme={healthProfileInputTheme}>
            <span style={{ minWidth: '250px', display: 'inline-block'}}>Age:&nbsp;&nbsp;
            <TextField sx={{width: '100px'}} id="outlined-start-adornment" /></span>
            <span>Sex:&nbsp;&nbsp;
                <FormControl sx={{width: '150px'}} size="small">
                    <Select
                        labelId="sex-label"
                        id="sex-label"
                        value={sex}
                        onChange={onSexChange}
                    >
                        <MenuItem value='Male'>Male</MenuItem>
                        <MenuItem value='Female'>Female</MenuItem>
                    </Select>
                </FormControl>
            </span>

            <p/>
            <span style={{ minWidth: '250px', display: 'inline-block'}}>Race:&nbsp;&nbsp;
                <FormControl sx={{width: '150px'}} size="small">
                    <Select
                        labelId="race-label"
                        id="race-label"
                        value={race}
                        onChange={onRaceChange}
                    >
                        <MenuItem value='Black'>Black</MenuItem>
                        <MenuItem value='White'>White</MenuItem>
                    </Select>
                </FormControl>
            </span>
            <span style={{ minWidth: '200px', display: 'inline-block'}}>Marrital Status:&nbsp;&nbsp;
                <FormControl sx={{width: '150px'}} size="small">
                    <Select
                        labelId="marrital-status-label"
                        id="marrital-status-label"
                        value={marritalStatus}
                        onChange={onMarritalStatusChange}
                    >
                        <MenuItem value='Married'>Married</MenuItem>
                        <MenuItem value='Unmarried'>Unmarried</MenuItem>
                    </Select>
                </FormControl>
            </span>
        </ThemeProvider>
        <p/>
        <Divider />
        <p/>
        <EditCancerProfile />
        <Divider />
        <p />
        <ThemeProvider theme={buttonTheme}>
              <Button size="small" variant="contained" color="success" onClick={onSaveClick}>Save Profile</Button>
        </ThemeProvider>
      </>
    );
  }
  
  export default EditProfile;