import React from 'react';

export default function Accessability({treatment}) {
    return (
        <>
            <p className="align-center"><b>Accessability</b></p>
            <br/>
            <b>Ask Your Doctor</b>: {treatment.name} is a clinically available treatment option. Ask your care team for more information.
            <br/>
            <b>Clinical trial opportunities</b>: Find clinical trials for {treatment.name}.
        </>
    );
}