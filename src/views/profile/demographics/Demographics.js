import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

export default function Demographics({profile, handleProfileUpdate}) {

    const [birthdayValue, setBirthDayValue] = React.useState(profile.demographics.birthday ? dayjs(profile.demographics.birthday) : null);
    const [sex, setSex] = React.useState(profile.demographics.sex ? profile.demographics.sex : 'male');

    const handleChange = (event, value) => {
        setSex(value);
    }

    const onClickSave = () => {
        handleProfileUpdate({
            demographics: {
                birthday: birthdayValue.format('YYYY-MM-DD').toString(),
                sex: sex,
            },
        })
    }

    const onClickCancel = () => {
        setBirthDayValue(profile.demographics.birthday ? dayjs(profile.demographics.birthday) : null);
        setSex(profile.demographics.sex ? profile.demographics.sex : 'male');
    }
    return (
    <Box sx={{ width: '100%', maxWidth: '800px'}}>
      <Typography variant="body1" gutterBottom>
        <div>
            <Grid container spacing={1}>
            <Grid item xs={4}>
                <div style={{ textAlign: 'right', paddingTop: '12px'}}>Date of Birth:&nbsp;&nbsp;</div> 
            </Grid>
            <Grid item xs={8}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                inputFormat="MM/DD/YYYY"
                                value={birthdayValue}
                                disableFuture
                                onChange={(newValue) => setBirthDayValue(newValue)}
                                renderInput={(params) => <TextField {...params} /> }
                                sx={{ 'input': {height: '10px'}}}
                                />
                </LocalizationProvider>
            </Grid>
            </Grid>
        </div>
        <p/>
        <div>
            <Grid container spacing={1}>
            <Grid item xs={4}>
                <div style={{ textAlign: 'right', paddingTop: '12px'}}>Sex:&nbsp;&nbsp;</div> 
            </Grid>
            <Grid item xs={8}>
            <ToggleButtonGroup
                color="primary"
                value={sex}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                >
                <ToggleButton value="male">Male</ToggleButton>
                <ToggleButton value="female">Female</ToggleButton>
                </ToggleButtonGroup>
            </Grid>
            </Grid>
        </div>
      </Typography>
      <p/>
      <Divider />
      <p/>
      <Grid container spacing={1}>
            <Grid item xs={8}>
            </Grid>
            <Grid item xs={4}>
                <Button size="large" variant="contained" onClick={onClickSave}>Save</Button>&nbsp;&nbsp;
                <Button size="large" variant="outlined" onClick={onClickCancel}>Cancel</Button>
            </Grid>
       </Grid>
      
    </Box>
    )
}