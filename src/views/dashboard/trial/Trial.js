import React from 'react';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { getFirstCell } from '../../../utils/UIUtils';

const getGroupAssignmentText = (count) => {
    if (count == 1) {
        return "There is only 1 group. All participants will be assigned to the group below.";
    }
    return `There are ${count} groups. Participants will be assigned randomly to one of the groups below.`
} 

export default function Trial({trial}) {
    const firstStudy = trial.studies[0];
    const restStudies = trial.studies.length > 1 ? trial.studies.slice(1 - trial.studies.length) : undefined;
    return (   
        <>
        <Chip label={trial.status} size="small" />&nbsp;&nbsp;
        <Chip label={trial.studyType} size="small" />&nbsp;&nbsp;
        <Chip label={'Phase ' + trial.phase} size="small" />&nbsp;&nbsp;
        <Chip label={trial.treatmentType} size="small" />
        <p/>
        <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
            <TableRow sx={{height: 5}}>
                {getFirstCell('Treatments studied:')}
              <TableCell sx={{border: 0, padding: 0}}>{firstStudy.type}:{firstStudy.study}</TableCell>
            </TableRow>
            {restStudies && restStudies.map(study => (
                <>
              {getFirstCell("")}
              <TableCell sx={{border: 0, padding: 0}}>{study.type}:{study.study}</TableCell>
              </>
            ))}
            <TableRow sx={{height: 5}}>
                {getFirstCell('Institution:')}
                <TableCell sx={{border: 0, padding: 0}}>{trial.institution}</TableCell>
            </TableRow>
            <TableRow key="empty row as a line break" sx={{height: 5}}>
                {getFirstCell("")}
                <TableCell sx={{border: 0, padding: 0}}>&nbsp;</TableCell>
            </TableRow>
            <TableRow sx={{height: 5}}>
                {getFirstCell('Participant groups:')}
                <TableCell sx={{border: 0, padding: 0}}>{getGroupAssignmentText(trial.groups.length)}</TableCell>
            </TableRow>

            {
                [...Array(trial.groups.length).keys()].map(index =>             
                <TableRow sx={{height: 30}}>
                    {getFirstCell(<b>group {index}:</b>)}
                    <TableCell sx={{border: 0, padding: 0}}><Chip label={trial.groups[index].groupName} size="small" /></TableCell>
                </TableRow>)
            }

        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
};