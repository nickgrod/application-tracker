import React, { useContext } from 'react';
import ResultsContext from '../context/results-context'
import ResultsBox from './ResultsBox'
import PlusSign from './PlusSign';
import placid from '../images/placid.svg'

const showResultsModal = () => {
    document.getElementById('results-modal').style.display = 'flex'
    document.getElementById('modal-wrapper').style.display = 'flex'

}

const ResultsCard = () => {
    const { results } = useContext(ResultsContext)
    return (
        <div className='dashboard-container'>
            <div className='row align-center' onClick={showResultsModal}>
                <h2 className='dashboard-container-header'>
                    Results
                </h2>
                <PlusSign />
            </div>
            <div className='row'>
                <div className='divider blue-bg'></div>
            </div>
            {
                results.length>0? (
                results.map((result) => {
                    return (
                        <ResultsBox key={result} result={result} />
                    )
                })
                ) : (
                    <div className = 'nothing-wrapper'>
                        <img className = 'animated fadeInUp' src = {placid} alt = 'Smiley face'/>
                        <p className = 'animated fadeIn'>Nothing to show yet.<br/>Fingers crossed!</p>
                    </div>
                )
            }
            {
                results.length > 0 ? (
                    <div className='row align-end'>
                        <div className='btn btn-more'>See All</div>
                    </div>
                ) : (
                        null
                    )

            }


        </div>
    )
}
export default ResultsCard