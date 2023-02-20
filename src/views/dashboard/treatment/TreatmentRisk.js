import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import PredictionModal from '../prediction/PredictionModal';



const extractGrades = (treatment) => {
    return treatment.risks[0].predictions.map(prediction => prediction.grade);
}

const computeTotal = (predictions) => {
    let sum = 0;
    predictions.forEach(prediction => {
        sum += prediction.probability;
    });
    return sum;
}

export default function TreatmentRisk({treatment}) {

  const grades = extractGrades(treatment);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => setOpen(false);



  return (
    <>
      <div className="align-center"><b>Your expected risks (adverse effects)
      <br/>
      from {treatment.name}</b></div>
        <TableContainer sx={{ boxShadow: 'none'}} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>         
                <TableCell variant='head' sx={{ fontWeight: 800, border: 0}}>Adverse effects</TableCell>
                {
                  grades.map(grade => <TableCell align="right" sx={{ fontWeight: 800, border: 0}}>{grade}</TableCell>)
                }
                <TableCell align="right" sx={{ fontWeight: 800, border: 0}}>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {treatment.risks.map((risk) => (
                <TableRow key={risk.name}>
                  <TableCell component="th" scope="row" sx={{ border: 0}}>
                    {risk.name}
                  </TableCell>
                  {risk.predictions.map((prediction) => 
                    <TableCell align="right" sx={{ border: 0}}>{prediction.probability}%<NotListedLocationIcon onClick={handleOpen} sx={{fontSize: 15}}/></TableCell>
                  )}
                  <TableCell align="right" sx={{ border: 0}}>{computeTotal(risk.predictions)}%<NotListedLocationIcon onClick={handleOpen} sx={{fontSize: 15}}/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <PredictionModal openState={open} onCloseCallback={handleClose} cancerDeathCount={90} otherDeathCount={1} years={10}/>
      <div />
    </>
  );
};