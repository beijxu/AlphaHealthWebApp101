import React from 'react';
import TreatmentList from '../treatment/TreatmentList';
import Trial from './Trial';
import { Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FilterModal from './FilterModal';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const trials = [
    {
        id: 't1',
        status: 'Recruiting',
        studyType: 'Interventional',
        phase: 'N/A',
        treatmentType: 'Radiotherapy',
        studies: [
            {
                type: 'Radiotherapy',
                study: 'low dose rate brachytherapy + external-beam radiation',
            }
        ],
        institution: 'Fred Hutch Cancer Center, Seattle, Washington',
        groups: [
            {
                groupId: 'g1',
                groupName: 'Radiation: low dose rate brachytherapy + external-beam radiation',
            }
        ],
    },
    {
        id: 't2',
        status: 'Recruiting',
        studyType: 'Interventional',
        phase: '1',
        treatmentType: 'Radiotherapy',
        studies: [
            {
                type: 'Radiotherapy',
                study: 'Civasheet 60 Gy or 75 Gy;',
            },
            {
                type: 'Radiotherapy',
                study: 'external-beam radiation',
            }
        ],
        institution: 'Kaiser Permanente, Bellevue, Washington',
        groups: [
            {
                groupId: 'g1',
                groupName: 'Civasheet 60 Gy + external-beam radiation 45 Gy in 25 fractions',
            },
            {
                groupId: 'g2',
                groupName: 'Civasheet 60 Gy',
            },
            {
                groupId: 'g3',
                groupName: 'Civasheet 75 Gy + external-beam radiation 45 Gy in 25 fractions',
            },
            {
                groupId: 'g4',
                groupName: 'Civasheet 75 Gy',
            }
        ],
    }
]
export default function Trials() {
    const [open, setOpen] = React.useState(false);
    const [sortBy, setSortBy] = React.useState('distance')
    const handleOpen = () => {
      setOpen(true);
    }
    const handleClose = () => setOpen(false);
    const handleChange = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TreatmentList selectedTreatment='t1'/>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={handleOpen}>Filter</Button>
          </Grid>
          <Grid item xs={2}>
          <FormControl sx={{ m: 1, minWidth: 120, padding: '7.5px' }} size="small" hiddenLabel>
            <InputLabel>Sort</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortBy}
            label="Age"
            onChange={handleChange}
            >
                <MenuItem value='status'>Study Status</MenuItem>
                <MenuItem value='type'>Study Type</MenuItem>
                <MenuItem value='distance'>Distance</MenuItem>
            </Select>
            </FormControl>
          </Grid>
        </Grid>
            
            {
                trials.slice(0, trials.length-1).map(trial => <><p/><Trial trial={trial} /><p/><Divider /></>)
            }   
            <p/>
            <Trial trial={trials.slice(-1)[0]} />     
            <FilterModal openState={open} onCloseCallback={handleClose} />    
        </>
    );
}