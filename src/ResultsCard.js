import React, { useContext } from 'react';
import ResultsContext from './context/results-context'
import ResultsBox from './ResultsBox'
import PlusSign from './PlusSign';

const showResultsModal = () => {
    document.getElementById('results-modal').style.display = 'flex'
    document.getElementById('modal-wrapper').style.display = 'flex'

}

const ResultsCard = () => {
    const {results} = useContext(ResultsContext)
    return (
        <div className = 'dashboard-container'>
            <div className = 'row align-center'  onClick = { showResultsModal }>
                <h2 className = 'dashboard-container-header'>
                    Results
                </h2>
            <PlusSign/>
            </div>
            <div className = 'row'>
                <div className = 'divider blue-bg'></div>
            </div>
            { 
                results.map((result) =>{
                    return (
                        <ResultsBox key = {result} result = {result}/>
                    )
                }) 
            }
            
            <div className = 'row align-end'>
            <div className = 'btn btn-more'>See All</div>
            </div>
            
        </div>
    )
}
export default ResultsCard