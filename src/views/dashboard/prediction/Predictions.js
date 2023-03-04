import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import PredictionModal from './PredictionModal';

const rows = [
  {
    name: 'Probability of prostate cancer death',
    firstMilestone: 0,
    secondMilestone: 3,
    thirdMilestone: 5,
  },
  {
    name: 'Probability of other death', 
    firstMilestone: 5,
    secondMilestone: 8,
    thirdMilestone: 12,
  }
];

const treatments = [
  {
    id: 't1',
    name: 'Surgery: prostatectomy',
  },
  {
    id: 't2',
    name: 'Radiotherapy: brachytherapy',
  },
  {
    id: 't3',
    name: 'Radiotherapy: external-beam radiation',
  },
  {
    id: 't4',
    name: 'Radiotherapy: external-beam radiation + Medical therapy: androgen-deprivation therapy',
  },
];

export default function Predictions() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  return (
    <>
    <TableContainer sx={{ boxShadow: 'none'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>         
            <TableCell variant='head' sx={{ fontWeight: 800, border: 0}}>Outcomes</TableCell>
            <TableCell align="right" sx={{ fontWeight: 800, border: 0}}>5-year</TableCell>
            <TableCell align="right" sx={{ fontWeight: 800, border: 0}}>10-year</TableCell>
            <TableCell align="right" sx={{ fontWeight: 800, border: 0}}>15-year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" sx={{ border: 0}}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{ border: 0}}>
                {row.firstMilestone}<NotListedLocationIcon onClick={handleOpen} sx={{fontSize: 15}}/>
              </TableCell>
              <TableCell align="right" sx={{ border: 0}}>{row.secondMilestone}%</TableCell>
              <TableCell align="right" sx={{ border: 0}}>{row.thirdMilestone}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <p/>
    <Divider />
    <p className="align-center"><b>Therapeutic options</b></p>
    {
     treatments.map((treatment) => (
      <div><ArrowCircleRightOutlinedIcon fontSize='small' sx={{verticalAlign: 'middle', paddingRight: 1}}/>{treatment.name}</div>
    ))}
    <PredictionModal openState={open} onCloseCallback={handleClose} cancerDeathCount={90} otherDeathCount={1} years={10}/>
    </>
  );
}
