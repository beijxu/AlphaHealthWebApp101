import React, {useEffect} from 'react';
import TreatmentList from '../treatment/TreatmentList';
import Trial from './Trial';
import { Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FilterModal from './FilterModal';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';
import Spinner from '../../../components/elements/Spinner';



export default function Trials({treatmentId, handleTreatmentChange}) {
    useEffect(() => {
        fetch("https://ivtp7bta1l.execute-api.us-west-2.amazonaws.com/beta/query/clinicalTrials?userId=xyz")
            .then(response => response.json())
            .then(data => updatePages(data.clinicalTrialList))
            .catch(error => console.error(error));
        }, []);

    const [pages, setPages] = React.useState(null);    
    const [open, setOpen] = React.useState(false);
    const [pageIndex, setPageIndex] = React.useState(0);
    const handleOpen = () => {
      setOpen(true);
    }
    const handleClose = () => setOpen(false);
    const handlePaginationChange = (event, value) => {
        setPageIndex(value - 1);
    }

    const updatePages = (trials) => {
        const pageSize = 5;

        const tempPages = [];
        const pageCount = Math.ceil(trials.length / pageSize);
        for(let i = 0; i < pageCount; i++) {
            const itemCount = Math.min(pageSize, trials.length - i * pageSize);
            const page = [];
            for(let j=0; j<itemCount; j++) {
                const index = i * pageSize + j;
                const trial = trials[ i * pageSize + j];
                if (index === trials.length - 1) {
                    page.push(<Trial trial={trial} />);
                } else {
                    page.push(<><p/><Trial trial={trial} /><p/><Divider /></>);
                }
            }
            tempPages.push(page);
        }
        setPages(tempPages);
        setPageIndex(0);
    }

    const selectedTreatmentId = treatmentId ? treatmentId : 't1';
    return (
        <>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TreatmentList treatmentId={selectedTreatmentId} handleTreatmentChange={handleTreatmentChange}/>
          </Grid>
          <Grid item xs={4}>
            <Button onClick={handleOpen}>Filter</Button>
          </Grid>
        </Grid>
        <p/>
        
        {pages == null && <Spinner text="Loading trials ..." marginTop={40}/>}
        {pages && <Pagination count={pages.length} onChange={handlePaginationChange} />}
        {pages && pages[pageIndex]}
        <FilterModal openState={open} onCloseCallback={handleClose} />    
        </>
    );
}