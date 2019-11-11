import React from 'react';


const ResultsBox = ( {result} ) => {

    return (
        <div className = 'application-box'>
        <div className = 'row align-center head-box'>
        <h3>{result.position}</h3>

        </div>
            
            <p>{result.result} - {result.date}</p>
        </div>
    )
}
export default ResultsBox