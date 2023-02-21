import React from 'react';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';

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
        <Grid container spacing={2}>
          <Grid item xs={3}>
            Treatments studied:
          </Grid>
          <Grid item xs={9}>            
            <div>
                {firstStudy.type}: {firstStudy.study}
                {
                    restStudies && restStudies.map(study => (
                        <>
                        <br/>
                        {study.type}: {study.study}                        
                        </>
                    ))
                }
                
            </div>
          </Grid>
        </Grid>

        </>
    )
};