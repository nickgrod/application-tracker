import React, { useContext } from 'react';
import AppsContext from './context/applications-context'
import InterviewsContext from './context/interview-context'
import ResultsContext from './context/results-context'

const closeAppModal = () => {
    document.getElementById('application-modal').style.display = 'none'
    document.getElementById('modal-wrapper').style.display = 'none'
}
const closeInterviewModal = () => {
    document.getElementById('interview-modal').style.display = 'none'
    document.getElementById('modal-wrapper').style.display = 'none'
}
const closeResultModal = () => {
    document.getElementById('results-modal').style.display = 'none'
    document.getElementById('modal-wrapper').style.display = 'none'
}
const ApplicationModal = () => {
    const { apps, appsDispatch } = useContext(AppsContext)
    const { interviews, interviewsDispatch } = useContext(InterviewsContext)
    const { results, resultsDispatch} = useContext(ResultsContext)

    const addApp = () => {
        appsDispatch({
            type: 'ADD_APP', app: {
                position: document.getElementById('app-m-title').value,
                company: document.getElementById('app-m-company').value,
                location: document.getElementById('app-m-location').value,
                date: document.getElementById('app-m-date').value
            }
        })
        closeAppModal()
    }

    const addInterview = () => {
        interviewsDispatch({
            type: 'ADD_INTERVIEW', interview: {
                position: document.getElementById('interview-app').value,
                type: document.getElementById('interview-type').value,
                result: document.getElementById('interview-result').value,
                date: document.getElementById('app-m-date').value
            }
        })
        closeInterviewModal()
    }

    const addResult = () => {
        resultsDispatch({
            type: 'SET_RESULT', result: {
                position: document.getElementById('result-app').value,
                result: document.getElementById('result-type').value,
                date: document.getElementById('result-date').value
            }
        })
        closeResultModal()
    }
    return (
        <div className='modal-wrapper' id='modal-wrapper'>
            <div className='application-modal' id='application-modal'>
                <h2 className='open-sans'>Add New Application</h2>
                <input placeholder='Position Title. Ex: Full Stack Developer' type='text' className='modal__field' id='app-m-title'></input>
                <input placeholder='Company/ Team Name' type='text' className='modal__field' id='app-m-company'></input>
                <input placeholder='Location' type='text' className='modal__field' id='app-m-location'></input>
                <input type='date' className='modal__field' id='app-m-date'></input>
                <div className='row btn-row'>
                    <div className='btn btn-success'
                        onClick={addApp}>
                        Save
                </div>
                    <div onClick={closeAppModal} className='btn btn-cancel'>
                        Cancel
                </div>
                </div>
            </div>
            <div className='application-modal' id='interview-modal'>
                <h2 className='open-sans'>Add New Interview</h2>
                <label>Position</label>
                <select id='interview-app'>
                    {
                        apps.map((app) => {
                            return (
                                <option key={app} value={app.position + ': ' + app.company}>{app.position}: {app.company}</option>
                            )
                        })
                    }
                </select>
                <label>Type</label>
                <select id='interview-type'>
                    <option value='Phone'>Phone Screen</option>
                    <option value='On-Site'>On-Site</option>
                </select>
                <label>Date</label>
                <input className='modal__field' type='date' id='interview-m-date'></input>
                <label>How Did It Go?</label>
                <select id='interview-result'>
                    <option value='poor'>Very badly</option>
                    <option value='not-great'>Not so great</option>
                    <option value='neutral'>Hard to tell/ Okay</option>
                    <option value='better'>Not too bad</option>
                    <option value='best'>Very well</option>
                </select>
                <div className='row btn-row'>
                    <div className='btn btn-success'
                        onClick={addInterview}>
                        Save
                </div>
                    <div onClick={closeInterviewModal} className='btn btn-cancel'>
                        Cancel
                </div>
                </div>
            </div>
            <div className='application-modal' id='results-modal'>
                <h2 className='open-sans'>Add Result</h2>
                <label>Position</label>
                <select id='result-app'>
                    {
                        apps.map((app) => {
                            return (
                                <option key={app} value={app.position}>{app.position}: {app.company}</option>
                            )
                        })
                    }
                </select>
                <label>Type</label>
                <select id='result-type'>
                    <option value='Offer'>Offer Received</option>
                    <option value='Rejection'>Rejected</option>
                </select>
                <label>Date</label>
                <input className='modal__field' type='date' id='result-date'></input>
                <div className='row btn-row'>
                    <div className='btn btn-success'
                        onClick={addResult}>
                        Save
                </div>
                    <div onClick={closeResultModal} className='btn btn-cancel'>
                        Cancel
                </div>
                </div>
            </div>
        </div>
    )
}
export default ApplicationModal