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
import Pagination from '@mui/material/Pagination';

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
                study: 'Civasheet 3;',
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
                groupName: 'Civasheet 4',
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
                study: 'Civasheet 68 Gy or 75 Gy;',
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
                groupName: 'Civasheet 5',
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
                groupName: 'Civasheet 6',
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
                groupName: 'Civasheet 7',
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
                groupName: 'Civasheet 8',
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
                study: 'Civasheet 9;',
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
                groupName: 'Civasheet 10',
            },
            {
                groupId: 'g2',
                groupName: 'Civasheet 61 Gy',
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
                study: 'Civasheet 99;',
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
                groupName: 'Civasheet 100',
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
    },
]
export default function Trials() {
    const [open, setOpen] = React.useState(false);
    const [sortBy, setSortBy] = React.useState('distance');
    const [pageIndex, setPageIndex] = React.useState(0);
    const handleOpen = () => {
      setOpen(true);
    }
    const handleClose = () => setOpen(false);
    const handleChange = (event) => {
        setSortBy(event.target.value);
    };
    const handlePaginationChange = (event, value) => {
        setPageIndex(value - 1);
    }

    const pageSize = 5;

    const pages = [];
    const pageCount = Math.ceil(trials.length / pageSize);
    for(let i = 0; i < pageCount; i++) {
        const itemCount = Math.min(pageSize, trials.length - i * pageSize);
        const page = [];
        for(let j=0; j<itemCount; j++) {
            const index = i * pageSize + j;
            const trial = trials[ i * pageSize + j];
            if (index === trials.length - 1) {
                page.push(<Trial trial={trial} />);
            } else {
                page.push(<><p/><Trial trial={trial} /><p/><Divider /></>);
            }
        }
        pages.push(page);
    }


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
        <Pagination count={pageCount} onChange={handlePaginationChange} />
        {pages[pageIndex]}
        <FilterModal openState={open} onCloseCallback={handleClose} />    
        </>
    );
}