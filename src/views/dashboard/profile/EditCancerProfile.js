import * as React from 'react';
import TextField from '@mui/material/TextField';
import { healthProfileInputTheme, tinyButtonTheme } from '../../../components/MUIOverrides';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const EditCancerProfile = () => {
    const cancerProfile = {
        gleasonHistory: [
            {
                score: '3+4', 
                date: '2020-09',

            }
        ],
        tumorHistory: [
            {   
                date: '2021-09',
                tumorStageT: 'pT2',
                tumorStageN: 'N0',
                tumorStageM: 'M0',
            }
        ],
        treatmentHistory: [
          {
            treatment: 'Prostatectomy',
            treatmentDate: '2020-11',
          },
          {
            treatment: 'Radiotherapy: external-beam radiation',
            treatmentDate: '2021-01',
          },
        ],
    }

    return (
      <>
      <ThemeProvider theme={healthProfileInputTheme}>
        <b>Prostate cancer</b>
        <p/>
        {
            cancerProfile.gleasonHistory.map(item => 
                <div className='span-2-box'>
                    <span>Gleason score: <TextField sx={{width: '100px'}} id="outlined-start-adornment" defaultValue={item.score} /></span>
                    <span><TextField sx={{width: '100px'}} id="outlined-start-adornment" defaultValue={item.date}/></span>
                </div>
                )
        }
        <p/>
        <Button size="small" variant="outlined" color="success" sx={{ paddingTop: 0, paddingBottom: 0}}>+ Biopsy result</Button>
        <p/>
        {
            cancerProfile.tumorHistory.map(item => 
                <>
                <div className='span-2-box '>
                    <span>tumor stage (TNM)</span>
                    <span><TextField sx={{width: '100px'}} id="outlined-start-adornment" defaultValue={item.date}/></span>
                </div>
                <div className='indentation-small'>T (primary tumor): <TextField sx={{width: '100px'}} id="outlined-start-adornment" defaultValue={item.tumorStageT}/></div>
                <div className='indentation-small'>N (pelvic lymph node):  <TextField sx={{width: '100px'}} id="outlined-start-adornment" defaultValue={item.tumorStageN}/></div>
                <div className='indentation-small'>M (distant metastasis):  <TextField sx={{width: '100px'}} id="outlined-start-adornment" defaultValue={item.tumorStageM}/></div>
                </>
            )
        }        
        <p/>
        <Button size="small" variant="outlined" color="success" sx={{ paddingTop: 0, paddingBottom: 0}}>+ Tumor Staging result</Button>
        <p/>
        {cancerProfile.treatmentHistory.map((row) => (
            <div className='span-2-box indentation-small'>
                  <span>{row.treatment}</span>
                  <span>{row.treatmentDate}</span>
            </div>

        ))}
        </ThemeProvider>
      </>
    );
  }
  
  export default EditCancerProfile;