import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const popularGroup = 'Popular Treatments';
const otherGroup = 'Other Treatments';

const treatments = [
      {
        id: 't2',
        name: 'Radiotherapy: brachytherapy',
        group: popularGroup,
      },
      {
        id: 't3',
        name: 'Radiotherapy: external-beam radiation',
        group: popularGroup,
      },
      {
        id: 't1',
        name: 'Surgery: prostatectomy',
        group: popularGroup,
      },
      {
        id: 't4',
        name: 'Radiotherapy: external-beam radiation + Medical therapy: androgen-deprivation therapy',
        group: popularGroup,
      },
      {
        id: 't5',
        name: 'Radiotherapy: external-beam radiation + Medical therapy: androgen-deprivation therapy',
        group: otherGroup,
      }
];

export default function TreatmentList({treatmentId, handleTreatmentChange}) {
  const onTreatmentChange=(event, selectedTreatment) => {
    handleTreatmentChange(selectedTreatment.id);
};

  return (
    <>
    <Autocomplete
      disablePortal
      id="treatment-list-box"
      options={treatments.sort((a, b) => b.group.localeCompare(a.group))}
      groupBy={(option) => option.group}
      getOptionLabel={(option) => option.name}
      onChange= {onTreatmentChange}
      sx={{ width: 500}}
      value={treatments.filter((treatment) => treatment.id === treatmentId)[0]}
      renderInput={(params) => <TextField {...params} />}
    />
    </>
  );
}

