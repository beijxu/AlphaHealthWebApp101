import React from 'react';
import Button from '@mui/material/Button';
import { linkStyleButton } from '../../../components/MUIOverrides';
import { ThemeProvider } from '@mui/material/styles';

export default function Accessability({treatment, handleTreatmentPageTrialLinkClick}) {
    const onClickTrialLink = () => handleTreatmentPageTrialLinkClick();
    return (
        <>
            <p className="align-center"><b>Accessability</b></p>
            <br/>
            <b>Ask Your Doctor</b>: {treatment.name} is a clinically available treatment option. Ask your care team for more information.
            <br/>
            
            <b>Clinical trial opportunities</b>: Find     
            <ThemeProvider theme={linkStyleButton}>
                <Button color="info" onClick={onClickTrialLink}>clinical trials</Button>
            </ThemeProvider>
             for {treatment.name}.
        </>
    );
}