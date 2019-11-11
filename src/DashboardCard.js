import React, { useContext } from 'react';
import AppsContext from './context/applications-context'
import ApplicationBox from './ApplicationBox'
import PlusSign from './PlusSign';

const showApplicationModal = () => {
    document.getElementById('application-modal').style.display = 'flex'
    document.getElementById('modal-wrapper').style.display = 'flex'

}

const DashboardCard = () => {
    const {apps} = useContext(AppsContext)

    return (
        <div className = 'dashboard-container'>
            <div className = 'row align-center'>
                <h2 className = 'dashboard-container-header'>
                    Submitted Applications
                </h2>
            <PlusSign onClick = { showApplicationModal }/>
            </div>
            <div class = 'row'>
                <div class = 'divider blue-bg'></div>
            </div>
            {
                apps.map((app) =>{
                    return (
                        <ApplicationBox key = {app} app = {app}/>
                    )
                })
            }
            <div className = 'row align-end'>
            <div className = 'btn btn-more'>See All</div>
            </div>
            
        </div>
    )
}
export default DashboardCard