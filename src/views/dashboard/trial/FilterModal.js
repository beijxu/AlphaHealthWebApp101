import React from "react";
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { getFirstCell } from '../../../utils/UIUtils';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { filterModalTheme } from '../../../components/MUIOverrides';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function FilterModal({openState, onCloseCallback}) {

    const handleClose = () => onCloseCallback();
    const onApplyButtonClick =() => onCloseCallback();
    
    return (
          <Modal
            open={openState}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
          <TableContainer sx={style}>
            <ThemeProvider theme={filterModalTheme}>
            <Table sx={{ minWidth: 400}} aria-label="simple table">
                <TableBody>
                    <TableRow sx={{height: 5}}>
                        {getFirstCell('Study status:')}
                        <TableCell> <FormControlLabel control={<Checkbox defaultChecked />} label="Recruting" /></TableCell>
                        <TableCell> <FormControlLabel control={<Checkbox defaultChecked />} label="Waitlist" /></TableCell>
                        <TableCell> <FormControlLabel control={<Checkbox defaultChecked />} label="On hold" /></TableCell>
                    </TableRow>
                    <TableRow sx={{height: 5}}>
                        {getFirstCell('Study type:')}
                        <TableCell> <FormControlLabel control={<Checkbox defaultChecked />} label="Observational" /></TableCell>
                        <TableCell> <FormControlLabel control={<Checkbox defaultChecked />} label="Interventional" /></TableCell>
                        <TableCell> <FormControlLabel control={<Checkbox defaultChecked />} label="Expanded access" /></TableCell>
                    </TableRow>
                    <TableRow sx={{height: 5}}>
                        {getFirstCell('Study phase:')}
                        <TableCell> <FormControlLabel control={<Checkbox defaultChecked />} label="Phase 1" /></TableCell>
                        <TableCell> <FormControlLabel control={<Checkbox defaultChecked />} label="Phase 2" /></TableCell>
                        <TableCell> <FormControlLabel control={<Checkbox defaultChecked />} label="Phase 3" /></TableCell>
                    </TableRow>
                    <TableRow sx={{height: 5}}>
                        {getFirstCell('')}
                        <TableCell> <FormControlLabel control={<Checkbox defaultChecked/>} size="small" label="Phase 4" /></TableCell>
                        <TableCell> <FormControlLabel control={<Checkbox defaultChecked/>} size="small" label="Phase N/A" /></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow sx={{height: 5}}>
                        {getFirstCell('Treatment type:')}
                        <TableCell> <FormControlLabel control={<Checkbox defaultChecked />} label="Behavioral" /></TableCell>
                        <TableCell> <FormControlLabel control={<Checkbox defaultChecked />} label="Dietary supplement" /></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow sx={{height: 5}}>
                        {getFirstCell('')}
                        <TableCell> <FormControlLabel control={<Checkbox defaultChecked />} label="Drug" /></TableCell>
                        <TableCell> <FormControlLabel control={<Checkbox defaultChecked />} label="Surgery" /></TableCell>
                        <TableCell> <FormControlLabel control={<Checkbox defaultChecked />} label="Radiotherapy" /></TableCell>
                    </TableRow>
                    <TableRow sx={{height: 5}}>
                        {getFirstCell('')}
                        <TableCell />
                        <TableCell />
                        <TableCell><Button size="small" variant="contained" color="info" onClick={onApplyButtonClick}>Apply</Button></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </ThemeProvider>            
          </TableContainer>

         
          </Modal>
      );
    
}