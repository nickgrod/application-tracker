import React, { useContext } from 'react';
import AppsContext from '../context/applications-context'
import ApplicationBox from './ApplicationBox'
import PlusSign from './PlusSign';
import placid from '../images/placid.svg'

const showApplicationModal = () => {
    document.getElementById('application-modal').style.display = 'flex'
    document.getElementById('modal-wrapper').style.display = 'flex'

}

const DashboardCard = () => {
    const {apps} = useContext(AppsContext)

    return (
        <div className = 'dashboard-container'>
            <div className = 'row align-center'  onClick = { showApplicationModal }>
                <h2 className = 'dashboard-container-header'>
                    Submitted Applications
                </h2>
            <PlusSign/>
            </div>
            <div className = 'row'>
                <div className = 'divider blue-bg'></div>
            </div>
            {
                apps.length>0?
                apps.map((app) =>{
                    return (
                        <ApplicationBox key = {app} app = {app}/>
                    )
                })
                : (
                    (<div className = 'nothing-wrapper'>
                        <img className = 'animated fadeInUp' src = {placid} alt = 'Smiley face'/>
                        <p className = 'animated fadeIn'>Nothing to show yet.<br/>Send out some resumes!</p>
                    </div>)
                )
            }
            {
                apps.length>0?(
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
export default DashboardCard