import * as React from 'react';
import { ProstateCancerCard} from './model/ProstateCancerCard.tsx';

const CancerProfile = () => {
    const cancerProfile: ProstateCancerCard = {
        gleasonScore: '3+4',
        gleasonScoreDate: '2020-09',
        tumorStageDate: '2020-11',
        tumorStageT: 'pT2',
        tumorStageN: 'N0',
        tumorStageM: 'M0',
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
    const age = 62;
    const sex = 'male';
    const race = 'black';
    const maritalStatus = 'married';
    const gleasonScore = '3+4';
    const gleasonScoreDate = '2020-09';
    return (
      <>
        <b>Prostate cancer</b>
        <p/>
        <div className='span-2-box'>
            <span>Gleason score: {cancerProfile.gleasonScore}</span>
            <span>{cancerProfile.gleasonScoreDate}</span>
        </div>
        <p/>
        <div className='span-2-box'>
            <span>tumor stage (TNM)</span>
            <span>{cancerProfile.tumorStageDate}</span>
        </div>
        <div className='indentation-small'>T (primary tumor): {cancerProfile.tumorStageT}</div>
        <div className='indentation-small'>N (pelvic lymph node): {cancerProfile.tumorStageN}</div>
        <div className='indentation-small'>M (distant metastasis): {cancerProfile.tumorStageM}</div>

        <p/>
        <div className='span-2-box'>
            <span>tumor stage (TNM)</span>
            <span>{cancerProfile.tumorStageDate}</span>
        </div>
        <p/>
        {cancerProfile.treatmentHistory.map((row) => (
            <div className='span-2-box indentation-small'>
                  <span>{row.treatment}</span>
                  <span>{row.treatmentDate}</span>
            </div>

        ))}
      </>
    );
  }
  
  export default CancerProfile;