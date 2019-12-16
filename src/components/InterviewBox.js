import React from 'react';


const InterviewBox = ( {interview} ) => {

    return (
        <div className = 'application-box animated slideInUp'>
        <div className = 'row align-center head-box'>
        <h3>{interview.position}</h3>
        {/* <p>{interview.date}</p> */}
        </div>
            
            <p>{interview.type} - {interview.date}</p>
        </div>
    )
}
export default InterviewBox