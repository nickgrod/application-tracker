import React, { useContext } from 'react';
import InterviewsContext from '../context/interview-context'
import InterviewBox from './InterviewBox'
import PlusSign from './PlusSign';

const showInterviewModal = () => {
    document.getElementById('interview-modal').style.display = 'flex'
    document.getElementById('modal-wrapper').style.display = 'flex'

}

const InterviewCard = () => {
    const {interviews} = useContext(InterviewsContext)
    return (
        <div className = 'dashboard-container'>
            <div className = 'row align-center'  onClick = { showInterviewModal }>
                <h2 className = 'dashboard-container-header'>
                    Interviews
                </h2>
            <PlusSign/>
            </div>
            <div className = 'row'>
                <div className = 'divider blue-bg'></div>
            </div>
            {
                interviews.map((interview) =>{
                    return (
                        <InterviewBox key = {interview} interview = {interview}/>
                    )
                })
            }
            <div className = 'row align-end'>
            <div className = 'btn btn-more'>See All</div>
            </div>
            
        </div>
    )
}
export default InterviewCard