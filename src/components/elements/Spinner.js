import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = ({text}) => {
    return (
        <><div className='spinner-bounding-box'>
            <CircularProgress color="primary"/>
            <div>{text}</div>
        </div>
        </>
    );
}

export default Spinner;