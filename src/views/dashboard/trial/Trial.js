import React from 'react';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { getFirstCell } from '../../../utils/UIUtils';

const getGroupAssignmentText = (count) => {
    if (count === 1) {
        return "There is only 1 group. All participants will be assigned to the group below.";
    }
    return `There are ${count} groups. Participants will be assigned randomly to one of the groups below.`
} 

const buildInstitution = (location) => {
    return `${location.instituteName},${location.locationCity},${location.locationState}`
}

export default function Trial({trial}) {

    const validInstitutions = trial.trialLocations.filter(location => location.locationStatus === trial.trialStatus.overallStatus);
    const firstInstitution = validInstitutions[0];
    const restInstitutions = validInstitutions.length > 1 ? validInstitutions.slice(1 - validInstitutions.length) : undefined;
    const institutionLabel = validInstitutions.length > 1 ? 'Institutions:' : 'Institution';
    return (   
        <>
        <Chip label={trial.trialStatus.overallStatus} size="small" />&nbsp;&nbsp;
        <Chip label={trial.studyType} size="small" />&nbsp;&nbsp;
        <Chip label={trial.studyPhase} size="small" />&nbsp;&nbsp;
        <Chip label={trial.treatmentDetails.treatmentType} size="small" />
        <p/>
        <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
            <TableRow sx={{height: 5}}>
                {getFirstCell('Treatments studied:')}
              <TableCell sx={{border: 0, padding: 0}}>{trial.treatmentDetails.treatmentStudied}</TableCell>
            </TableRow>
            <TableRow sx={{height: 5}}>
                {getFirstCell(institutionLabel)}
                <TableCell sx={{border: 0, padding: 0}}>{buildInstitution(firstInstitution)}</TableCell>
            </TableRow>
            {restInstitutions && restInstitutions.map(institution => (
                <>
              {getFirstCell("")}
              <TableCell sx={{border: 0, padding: 0}}>{buildInstitution(institution)}</TableCell>
              </>
            ))}
            <TableRow key="empty row as a line break" sx={{height: 5}}>
                {getFirstCell("")}
                <TableCell sx={{border: 0, padding: 0}}>&nbsp;</TableCell>
            </TableRow>
            <TableRow sx={{height: 5}}>
                {getFirstCell('Participant groups:')}
                <TableCell sx={{border: 0, padding: 0}}>{getGroupAssignmentText(trial.studyGroups.length)}</TableCell>
            </TableRow>

            {
                trial.studyGroups.map(group => (
                <TableRow sx={{height: 30}}>
                    {getFirstCell(group.groupId)}
                    <TableCell sx={{border: 0, padding: 0}}><Chip label={`${group.groupDescription}.${group.groupIntervention}`} size="small" /></TableCell>
                </TableRow>))
            }

        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
};