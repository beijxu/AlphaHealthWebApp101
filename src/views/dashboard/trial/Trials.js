import React, {useEffect} from 'react';
import TreatmentList from '../treatment/TreatmentList';
import Trial from './Trial';
import { Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FilterModal from './FilterModal';
import Pagination from '@mui/material/Pagination';
import Spinner from '../../../components/elements/Spinner';



export default function Trials({treatmentId, handleTreatmentChange}) {
    
    const initialFilterValues = {
        recruiting: true,
        waitlist: true,
        onhold: true,
        observational: true,
        interventional: true,
        expandedaccess: true,
        phase1: true,
        phase2: true,
        phase3: true,
        phase4: true,
        phasena: true,
        behavior: true,
        dietarysupplement: true,
        drug: true,
        surgery: true,
        radiotherapy: true,
    }
    const [filters, setFilters] = React.useState(initialFilterValues);
    const [pages, setPages] = React.useState(null);    
    const [open, setOpen] = React.useState(false);
    const [pageIndex, setPageIndex] = React.useState(0);
    const [allTrials, setAllTrials] = React.useState(null);

    const refreshPage = () => {
        if (allTrials)  { 
            const trials = filterTrials(); 
            updatePages(trials);
        }
    }

    useEffect(() => {
        fetch("https://ivtp7bta1l.execute-api.us-west-2.amazonaws.com/beta/query/clinicalTrials?userId=xyz")
            .then(response => response.json())
            .then(data => setAllTrials(data.clinicalTrialList))
            .catch(error => console.error(error));
        }, []);

    // useEffect does the callback whenever allTrials state changes
    // Need to use callback because state change is async
    useEffect(() => { refreshPage()}, [allTrials, filters])

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handlePaginationChange = (event, value) => setPageIndex(value - 1);
    const handleFiltersUpdate = (updatedFilters) => setFilters(updatedFilters);

    const filterTrials = () => {
        const statusMatch = (trial) => {
            if (!filters.recruiting && trial.trialStatus.overallStatus === "Recruiting")
                return false;
            if (!filters.waitlist && trial.trialStatus.overallStatus === "Waitlist")
                return false; 
            if (!filters.onhold && trial.trialStatus.overallStatus == "On hold")
                return false;
            return true;
        };

        const studyTypeMatch = (trial) => {
            if (!filters.observational && trial.studyType === "Observational")
                return false;
            if (!filters.interventional && trial.studyType === "Interventional")
                return false;
            if (!filters.expandedaccess && trial.studyType === "Expanded access")
                return false;
            return true;
        };

        const phaseMatch = (trial) => {
            if (!filters.phase1 && trial.studyPhase === "Phase 1")
                return false;
            if (!filters.phase2 && trial.studyPhase === "Phase 2")
                return false;
            if (!filters.phase3 && trial.studyPhase === "Phase 3")
                return false;
            if (!filters.phase4 && trial.studyPhase === "Phase 4")
                return false;
            if (!filters.phasena && trial.studyPhase === "Phase N/A")
                return false;
            return true;
        };

        const treatmentTypeMatch = (trial) => {
            if (!filters.behavior && trial.treatmentDetails.treatmentType === "Behavioral")
                return false;
            if (!filters.dietarysupplement && trial.treatmentDetails.treatmentType === "Dietary supplement")
                return false;
            if (!filters.drug && trial.treatmentDetails.treatmentType === "Drug")
                return false;
            if (!filters.surgery && trial.treatmentDetails.treatmentType === "Surgery")
                return false;
            if (!filters.radiotherapy && trial.treatmentDetails.treatmentType === "Radiotherapy")
                return false;
            return true;
        }
        return allTrials.filter(trial => statusMatch(trial) && studyTypeMatch(trial) && phaseMatch(trial) && treatmentTypeMatch(trial))
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
          <Grid item xs={9}>
            <TreatmentList treatmentId={selectedTreatmentId} handleTreatmentChange={handleTreatmentChange}/>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={handleOpen}>Filter</Button>
          </Grid>
        </Grid>
        <p/>
        
        {pages == null && <Spinner text="Loading trials ..." marginTop={40}/>}
        {pages && <Pagination count={pages.length} onChange={handlePaginationChange} />}
        {pages && pages[pageIndex]}
        <FilterModal openState={open} onCloseCallback={handleClose} handleFiltersUpdate={handleFiltersUpdate} filters={filters} />    
        </>
    );
}