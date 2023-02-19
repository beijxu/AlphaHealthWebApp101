import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  firstMilestone: string,
  secondMilestone: string,
  thirdMilestone: string,
) {
  return { name, firstMilestone, secondMilestone, thirdMilestone };
}

const rows = [
  createData('Probability of recurrence', '15%', '25%', '30%'),
  createData('Probability of metastasis', '5%', '10%', '15%'),
  createData('Probability of prostate cancer death', '0%', '3%', '5%'),
  createData('Probability of other death', '5%', '8%', '12%'),
];

const headers = ['Outcomes', '5-year', '10-year', '15-year'];

export default function Predictions() {
  return (
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
              <TableCell align="right" sx={{ border: 0}}>{row.firstMilestone}</TableCell>
              <TableCell align="right" sx={{ border: 0}}>{row.secondMilestone}</TableCell>
              <TableCell align="right" sx={{ border: 0}}>{row.thirdMilestone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
