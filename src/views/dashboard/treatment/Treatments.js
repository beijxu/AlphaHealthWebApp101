import * as React from 'react';
import TreatmentList from './TreatmentList';
import TreatmentBenefits from './TreatmentBenefits';
import TreatmentRisk from './TreatmentRisk';
import Divider from '@mui/material/Divider';
import Accessability from './Accessability';


export default function Treatments() {
  const treatment = {
    id: 't1',
    name: 'Radiotherapy: external-beam radiation + Medical therapy: androgen-deprivation therapy',
    outcomes: [
      {
        name: 'cancer death',
        predictions: [
          {
            years: 5,
            probability: 0,
          },
          {
            years: 10,
            probability: 2,
          },
          {
            years: 15,
            probability: 4,
          },
        ],
      },
      {
        name: 'other death',
        predictions: [
          {
            years: 5,
            probability: 5,
          },
          {
            years: 10,
            probability: 8,
          },
          {
            years: 15,
            probability: 12,
          },
        ],
      },
    ],
    risks: [
      {
        name: 'urinary system',
        predictions: [
          {
            grade: 'Mild',
            probability: 10,
          },
          {
            grade: '>=Grade 3',
            probability: 5,
          },
          {
            grade: '>=Grade 4',
            probability: 1,
          },
        ],
      },
      {
        name: 'GI system',
        predictions: [
          {
            grade: 'Mild',
            probability: 0,
          },
          {
            grade: '>=Grade 3',
            probability: 3,
          },
          {
            grade: '>=Grade 4',
            probability: 1,
          },
        ],
      },
    ]
  }
  return (
    <>
        <TreatmentList selectedTreatment='t1' />
        <p/>
        <TreatmentBenefits treatment={treatment}/>
        <p/>
        <Divider />
        <p/>
        <TreatmentRisk treatment={treatment} />
        <p/>
        <Divider />
        <p/>
        <Accessability treatment={treatment} />
    </>
  );
}

