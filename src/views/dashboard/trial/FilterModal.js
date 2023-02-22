import React from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { getFirstCell } from '../../../utils/UIUtils';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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
    
    return (
        <div>
          <Modal
            open={openState}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
          <TableContainer sx={style}>
            <Table sx={{ minWidth: 400}} aria-label="simple table">
                <TableBody>
                    <TableRow sx={{height: 5}}>
                        {getFirstCell('Study status:')}
                        <TableCell sx={{border: 0, padding: 0}}> <FormControlLabel control={<Checkbox defaultChecked />} label="Recruting" /></TableCell>
                        <TableCell sx={{border: 0, padding: 0}}> <FormControlLabel control={<Checkbox defaultChecked />} label="Waitlist" /></TableCell>
                        <TableCell sx={{border: 0, padding: 0}}> <FormControlLabel control={<Checkbox defaultChecked />} label="On hold" /></TableCell>
                    </TableRow>
                    <TableRow sx={{height: 5}}>
                        {getFirstCell('Study type:')}
                        <TableCell sx={{border: 0, padding: 0}}> <FormControlLabel control={<Checkbox defaultChecked />} label="Observational" /></TableCell>
                        <TableCell sx={{border: 0, padding: 0}}> <FormControlLabel control={<Checkbox defaultChecked />} label="Interventional" /></TableCell>
                        <TableCell sx={{border: 0, padding: 0}}> <FormControlLabel control={<Checkbox defaultChecked />} label="Expanded access" /></TableCell>
                    </TableRow>
                    <TableRow sx={{height: 5}}>
                        {getFirstCell('Study phase:')}
                        <TableCell sx={{border: 0, padding: 0}}> <FormControlLabel control={<Checkbox defaultChecked />} label="Phase 1" /></TableCell>
                        <TableCell sx={{border: 0, padding: 0}}> <FormControlLabel control={<Checkbox defaultChecked />} label="Phase 2" /></TableCell>
                        <TableCell sx={{border: 0, padding: 0}}> <FormControlLabel control={<Checkbox defaultChecked />} label="Phase 3" /></TableCell>
                    </TableRow>
                    <TableRow sx={{height: 5}}>
                        {getFirstCell('')}
                        <TableCell sx={{border: 0, padding: 0}}> <FormControlLabel control={<Checkbox defaultChecked/>} size="small" label="Phase 4" /></TableCell>
                        <TableCell sx={{border: 0, padding: 0}}> <FormControlLabel control={<Checkbox defaultChecked/>} size="small" label="Phase N/A" /></TableCell>
                        <TableCell sx={{border: 0, padding: 0}}></TableCell>
                    </TableRow>
                    <TableRow sx={{height: 5}}>
                        {getFirstCell('Treatment type:')}
                        <TableCell sx={{border: 0, padding: 0}}> <FormControlLabel control={<Checkbox defaultChecked />} label="Behavioral" /></TableCell>
                        <TableCell sx={{border: 0, padding: 0}}> <FormControlLabel control={<Checkbox defaultChecked />} label="Dietary supplement" /></TableCell>
                        <TableCell sx={{border: 0, padding: 0}}></TableCell>
                    </TableRow>
                    <TableRow sx={{height: 5}}>
                        {getFirstCell('')}
                        <TableCell sx={{border: 0, padding: 0}}> <FormControlLabel control={<Checkbox defaultChecked />} label="Drug" /></TableCell>
                        <TableCell sx={{border: 0, padding: 0}}> <FormControlLabel control={<Checkbox defaultChecked />} label="Surgery" /></TableCell>
                        <TableCell sx={{border: 0, padding: 0}}> <FormControlLabel control={<Checkbox defaultChecked />} label="Radiotherapy" /></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
          </TableContainer>
          </Modal>
        </div>
      );
    
}