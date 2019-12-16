import React, { useContext } from 'react';
import InterviewsContext from '../context/interview-context'
import InterviewBox from './InterviewBox'
import PlusSign from './PlusSign';
import placid from '../images/placid.svg'

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
                interviews.length>0?
                interviews.map((interview) =>{
                    return (
                        <InterviewBox key = {interview} interview = {interview}/>
                    )
                }) : (
                    <div className = 'nothing-wrapper'>
                        <img className = 'animated fadeInUp' src = {placid} alt = 'Smiley face'/>
                        <p className = 'animated fadeIn'>Nothing to show yet.<br/>Phone lines are now open!</p>
                    </div>
                )
            }
            {
                interviews.length > 0? (
                    <div className = 'row align-end'>
            <div className = 'btn btn-more'>See All</div>
            </div>
                ) : (
                    null
                )
            }
            
            
        </div>
    )
}
export default InterviewCard