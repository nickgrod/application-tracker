import React , {useContext} from 'react';
import AppsContext from './context/applications-context'

const closeModal = () => {
    document.getElementById('application-modal').style.display = 'none'
    document.getElementById('modal-wrapper').style.display = 'none'
}
const ApplicationModal = () => {
    const { apps, appsDispatch} = useContext(AppsContext) 

    const addNote = () => {
        appsDispatch({ type:'ADD_APP', app:{
            position: document.getElementById('app-m-title').value,
            company: document.getElementById('app-m-company').value,
            location: document.getElementById('app-m-location').value,
            date: document.getElementById('app-m-date').value
        }})
        closeModal()
    }
    return (
        <div className = 'modal-wrapper' id = 'modal-wrapper'>
        <div className = 'application-modal' id = 'application-modal'>
        <h2 className = 'open-sans'>Add New Application</h2>
          <input placeholder = 'Position Title. Ex: Full Stack Developer' type = 'text' className = 'modal__field' id ='app-m-title'></input>
          <input placeholder = 'Company/ Team Name' type = 'text' className = 'modal__field' id = 'app-m-company'></input>
          <input placeholder = 'Location' type = 'text' className = 'modal__field' id = 'app-m-location'></input>
          <input type = 'date' className = 'modal__field' id = 'app-m-date'></input>
          <div className = 'row btn-row'>
                <div className = 'btn btn-success'
                onClick = { addNote }>
                    Save
                </div>
                <div onClick = { closeModal } className = 'btn btn-cancel'>
                    Cancel
                </div>
            </div>
        </div>

        </div>
    )
}
export default ApplicationModal