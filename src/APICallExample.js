import React, { useState, useEffect } from "react";

function APICallExample() {
    
    const [trials, setTrials] = useState([]);
    const url = "https://ivtp7bta1l.execute-api.us-west-2.amazonaws.com/beta/query/clinicalTrials?condition=brachytherapy&location=Seattle";

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setTrials(data.clinicalTrialList))
            .catch(error => console.error(error));
        }, []);

    
    return ( 
        <div>
            <div className="videoPlayer"> VideoPlayer - haha </div>
            
            <div className="studies-list">
            {trials.map(trial => 
            <li>
                {trial.trialIdentification.nctId}
            </li>)
            }
            </div>

        </div>
    );
}

export default APICallExample;