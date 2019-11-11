import React from 'react';


const ApplicationBox = ( {app} ) => {

    return (
        <div className = 'application-box'>
        <div className = 'row align-center head-box'>
        <h3>{app.company}</h3>
        <p>{app.date}</p>
        </div>
            
            <p>{app.position} - {app.location}</p>
        </div>
    )
}
export default ApplicationBox