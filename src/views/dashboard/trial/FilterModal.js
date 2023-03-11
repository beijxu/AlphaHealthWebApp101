import React, { useEffect, useState } from "react";
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
import { filter } from "d3-array";

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

export default function FilterModal({openState, onCloseCallback, handleFiltersUpdate, filters}) {

    /*
    const [recruiting, setRecruiting] = useState(filters.recruiting);
    const [waitlist, setWaitlist] = useState(filters.waitlist);
    const [onhold, setOnhold] = useState(filters.onhold);
    */
    const [behavior, setBehavior] = useState(filters.behavior);
    const [observational, setObservational] = useState(filters.observational);
    const [interventional, setInterventional] = useState(filters.interventional);
    const [expandedaccess, setExpandedaccess] = useState(filters.expandedaccess);
    const [phase1, setPhase1] = useState(filters.phase1);
    const [phase2, setPhase2] = useState(filters.phase2);
    const [phase3, setPhase3] = useState(filters.phase3);
    const [phase4, setPhase4] = useState(filters.phase4);
    const [phasena, setPhasena] = useState(filters.phasena);
    const [dietarysupplement, setDietarysupplement] = useState(filters.dietarysupplement);
    const [drug, setDrug] = useState(filters.drug);
    const [surgery, setSurgery] = useState(filters.surgery);
    const [radiotherapy, setRadiotherapy] = useState(filters.radiotherapy);

    //const [changed, setChanged] = useState(false);    

    const updatedFilters = Object.assign({}, filters);

    const handleClose = () => onCloseCallback();
    const onApplyButtonClick =() => {
        if (JSON.stringify(filters) != JSON.stringify(updatedFilters)) {
            handleFiltersUpdate(updatedFilters);
        }
        onCloseCallback();
    }

    const onCheckboxChanged = (event) => {
        updatedFilters[event.target.defaultValue] = event.target.checked;
    }


    const recruitingBox = filters.recruiting? <Checkbox defaultChecked value="recruiting" onChange={onCheckboxChanged}/> : <Checkbox value="recruiting" onChange={onCheckboxChanged}/>
    const waitlistBox = filters.waitlist? <Checkbox defaultChecked value="waitlist" onChange={onCheckboxChanged}/> : <Checkbox value="waitlist" onChange={onCheckboxChanged}/>
    const onholdBox = filters.onhold? <Checkbox defaultChecked value="onhold" onChange={onCheckboxChanged}/> : <Checkbox value="onhold" onChange={onCheckboxChanged}/>

    const observationalBox = filters.observational? <Checkbox defaultChecked value="observational" onChange={onCheckboxChanged}/> : <Checkbox value="observational" onChange={onCheckboxChanged}/>
    const interventionalBox = filters.interventional? <Checkbox defaultChecked value="interventional" onChange={onCheckboxChanged}/> : <Checkbox value="interventional" onChange={onCheckboxChanged}/>
    const expandedaccessBox = filters.expandedaccess? <Checkbox defaultChecked value="expandedaccess" onChange={onCheckboxChanged}/> : <Checkbox value="expandedaccess" onChange={onCheckboxChanged}/>

    const phase1Box = filters.phase1? <Checkbox defaultChecked value="phase1" onChange={onCheckboxChanged}/> : <Checkbox value="phase1" onChange={onCheckboxChanged}/>
    const phase2Box = filters.phase2? <Checkbox defaultChecked value="phase2" onChange={onCheckboxChanged}/> : <Checkbox value="phase2" onChange={onCheckboxChanged}/>
    const phase3Box = filters.phase3? <Checkbox defaultChecked value="phase3" onChange={onCheckboxChanged}/> : <Checkbox value="phase3" onChange={onCheckboxChanged}/>

    const phase4Box = filters.phase4? <Checkbox defaultChecked value="phase4" onChange={onCheckboxChanged}/> : <Checkbox value="phase4" onChange={onCheckboxChanged}/>
    const phasenaBox = filters.phasena? <Checkbox defaultChecked value="phasena" onChange={onCheckboxChanged}/> : <Checkbox value="phasena" onChange={onCheckboxChanged}/>

    const behaviorBox = filters.behavior? <Checkbox defaultChecked value="behavior" onChange={onCheckboxChanged}/> : <Checkbox value="behavior" onChange={onCheckboxChanged}/>
    const dietarysupplementBox = filters.dietarysupplement? <Checkbox defaultChecked value="dietarysupplement" onChange={onCheckboxChanged}/> : <Checkbox value="dietarysupplement" onChange={onCheckboxChanged}/>

    const drugBox = filters.drug? <Checkbox defaultChecked value="drug" onChange={onCheckboxChanged}/> : <Checkbox value="drug" onChange={onCheckboxChanged}/>
    const surgeryBox = filters.surgery? <Checkbox defaultChecked value="surgery" onChange={onCheckboxChanged}/> : <Checkbox value="surgery" onChange={onCheckboxChanged}/>
    const radiotherapyBox = filters.radiotherapy? <Checkbox defaultChecked value="radiotherapy" onChange={onCheckboxChanged}/> : <Checkbox value="radiotherapy" onChange={onCheckboxChanged}/>

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
                        <TableCell> <FormControlLabel control={recruitingBox} label="Recruting" /></TableCell>
                        <TableCell> <FormControlLabel control={waitlistBox} label="Waitlist" /></TableCell>
                        <TableCell> <FormControlLabel control={onholdBox} label="On hold" /></TableCell>
                    </TableRow>
                    <TableRow sx={{height: 5}}>
                        {getFirstCell('Study type:')}
                        <TableCell> <FormControlLabel control={observationalBox} label="Observational" /></TableCell>
                        <TableCell> <FormControlLabel control={interventionalBox} label="Interventional" /></TableCell>
                        <TableCell> <FormControlLabel control={expandedaccessBox} label="Expanded access" /></TableCell>
                    </TableRow>
                    <TableRow sx={{height: 5}}>
                        {getFirstCell('Study phase:')}
                        <TableCell> <FormControlLabel control={phase1Box} label="Phase 1" /></TableCell>
                        <TableCell> <FormControlLabel control={phase2Box} label="Phase 2" /></TableCell>
                        <TableCell> <FormControlLabel control={phase3Box} label="Phase 3" /></TableCell>
                    </TableRow>
                    <TableRow sx={{height: 5}}>
                        {getFirstCell('')}
                        <TableCell> <FormControlLabel control={phase4Box} size="small" label="Phase 4" /></TableCell>
                        <TableCell> <FormControlLabel control={phasenaBox} size="small" label="Phase N/A" /></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow sx={{height: 5}}>
                        {getFirstCell('Treatment type:')}
                        <TableCell> <FormControlLabel control={behaviorBox} label="Behavioral" /></TableCell>
                        <TableCell> <FormControlLabel control={dietarysupplementBox} label="Dietary supplement" /></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow sx={{height: 5}}>
                        {getFirstCell('')}
                        <TableCell> <FormControlLabel control={drugBox} label="Drug" /></TableCell>
                        <TableCell> <FormControlLabel control={surgeryBox} label="Surgery" /></TableCell>
                        <TableCell> <FormControlLabel control={radiotherapyBox} label="Radiotherapy" /></TableCell>
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