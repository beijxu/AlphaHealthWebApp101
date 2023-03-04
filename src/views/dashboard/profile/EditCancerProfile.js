import * as React from 'react';
import TextField from '@mui/material/TextField';
import { healthProfileInputTheme } from '../../../components/MUIOverrides';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


const EditCancerProfile = () => {
    const [value, setValue] = React.useState(
        dayjs('2014-08-18T21:11:54'),
      );
    
      const handleChange = (newValue) => {
        setValue(newValue);
      };

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
        psaHistory: [
            {
                psa: 200,
                date: '2020-01',
            },
            {
                psa: 300,
                date: '2022-01'
            }
        ]
    }

    return (
      <>
      <ThemeProvider theme={healthProfileInputTheme}>
        <b>Prostate cancer</b>
        <p/>
        <div className='span-2-box'><u>History of prostate biopsies</u></div>
        <p/>
        {
            cancerProfile.gleasonHistory.map(item => 
                <div className='span-2-box'>
                    <span>Gleason score: <TextField sx={{width: '100px'}} id="outlined-start-adornment" defaultValue={item.score} /></span>
                    <span><LocalizationProvider dateAdapter={AdapterDayjs}>  
                            <MobileDatePicker
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                    </span>
                </div>
                )
        }
        <p/>
        <Button size="small" variant="outlined" color="success" sx={{ paddingTop: 0, paddingBottom: 0}}>+ Biopsy result</Button>
        <p/>

        <div className='span-2-box'><u>History of prostate biopsies</u></div>
        <p/>
        {
            cancerProfile.tumorHistory.map(item => 
                <>
                <div className='span-2-box '>
                    <span>tumor stage (TNM)</span>
                    <span><LocalizationProvider dateAdapter={AdapterDayjs}>  
                            <MobileDatePicker
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                                />
                        </LocalizationProvider>
                    </span>
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

        <div className='span-2-box'><u>History of prostate biopsies</u></div>
        <p/>
        {cancerProfile.treatmentHistory.map((row) => (
            <div className='span-2-box indentation-small'>
                  <span>{row.treatment}</span>
                  <span><LocalizationProvider dateAdapter={AdapterDayjs}>  
                            <MobileDatePicker
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                </span>
            </div>

        ))}
        <p/>
        <Button size="small" variant="outlined" color="success" sx={{ paddingTop: 0, paddingBottom: 0}}>+ Treatment</Button>
        <p/>

        <div className='span-2-box'><u>History of serum PSA</u></div>
        <p/>
        {cancerProfile.psaHistory.map((row) => (
            <div className='span-2-box indentation-small'>
                  <span>{row.psa} ng/ml</span>
                  <span><LocalizationProvider dateAdapter={AdapterDayjs}>  
                            <MobileDatePicker
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                </span>
            </div>

        ))}
        <p/>
        <Button size="small" variant="outlined" color="success" sx={{ paddingTop: 0, paddingBottom: 0}}>+ PSA result</Button>
        <p/>
        </ThemeProvider>
      </>
    );
  }
  
  export default EditCancerProfile;