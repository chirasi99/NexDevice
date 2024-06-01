import React , { useEffect, useState } from 'react'
import { createDevice, getDevice, updateDevice } from '../services/DeviceService'
import { useNavigate, useParams } from 'react-router-dom'

const DeviceComponent = () => {

        const [name, setName] = useState('')
        const [model, setModel] = useState('')
        const [status, setStatus] = useState('')
        const [enrolledTime, setEnrolledTime] = useState('')

        const [errors, setErrors] = useState({
             name:'',
             model:'',
             status:'',
             enrolledTime:''   
        })

        const { id } = useParams();
        const navigator = useNavigate();

        useEffect(() => {
                if(id){
                        getDevice(id).then((response)=> {
                                setName(response.data.name);
                                setModel(response.data.model);
                                setStatus(response.data.status);
                                setEnrolledTime(response.data.enrolledTime);
                        }).catch(error =>{
                                console.error(error);
                        })
                        
                }
        },[id])

        function handleName(event){
                setName(event.target.value)
        }

        function handleModel(event){
                setModel(event.target.value)
        }

        function handleStatus(event){
                setStatus(event.target.value)
        }

        function handleEnrolledTime(event){
                setEnrolledTime(event.target.value)
        }

        function saveDevice(event){
                event.preventDefault();
                if(validateForm()){
                        let device = {name, model, status, enrolledTime}
                        console.log('device => ' + JSON.stringify(device))

                        if(id){
                                updateDevice(id,device).then((response) =>{
                                        console.log(response.data);
                                        navigator('/devices');
                                }).catch(error =>{
                                        console.error(error);
                                })
                        }else{
                                createDevice(device).then((response) => {
                                        console.log(response.data);
                                        navigator('/devices')
                                }).catch(error =>{
                                        console.error(error);
                                })
                        }     
                }        
        }

        function validateForm(){
                let valid = true;
                const errorsCopy = {... errors}
                if(name.trim()){
                        errorsCopy.name = '';
                }else{
                    errorsCopy.name ='Device name is required';
                    valid = false;    
                }
                if(model.trim()){
                        errorsCopy.model = '';
                }else{
                    errorsCopy.model ='Device model is required';
                    valid = false;    
                }
                if(status.trim()){
                        errorsCopy.status = '';
                }else{
                    errorsCopy.status = 'Status is required';
                    valid = false;    
                }
                if(enrolledTime.trim()){
                        errorsCopy.enrolledTime = '';
                }else{
                    errorsCopy.enrolledTime = 'Enrolled Time is required';
                    valid = false;    
                }

                setErrors(errorsCopy);

                return valid;
        }

        function pageTitle(){
                if(id){
                        return  <h2 className='text-center mt-3'>Update Device</h2>
                }else{
                        return  <h2 className='text-center mt-3'>Add Device</h2>
                }
        }
  return (
    <div>
        <div className="container mt-5">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                {pageTitle()}
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className='form-label'>Device Name:</label>
                                <input placeholder="Device Name" 
                                name="name" 
                                className={`form-control ${ errors.name ? 'is-invalid': '' }`}
                                value={name} 
                                onChange={handleName}/>
                                {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className='form-label'>Model:</label>
                                <input placeholder="Model"
                                 name="model" 
                                 className={`form-control ${ errors.model ? 'is-invalid': '' }`}
                                 value={model} 
                                 onChange={handleModel}/>
                                 {errors.model && <div className='invalid-feedback'>{errors.model}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className='form-label'>Status:</label>
                                <input placeholder="Status" 
                                name="status" 
                                className={`form-control ${ errors.status ? 'is-invalid': '' }`}
                                value={status} 
                                onChange={handleStatus}/>
                                {errors.status && <div className='invalid-feedback'>{errors.status}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className='form-label'>Enrolled Time:</label>
                                <input placeholder="Enrolled Time" 
                                name="enrolledTime" 
                                className={`form-control ${ errors.enrolledTime ? 'is-invalid': '' }`}
                                value={enrolledTime} 
                                onChange={handleEnrolledTime}/>
                                {errors.enrolledTime && <div className='invalid-feedback'>{errors.enrolledTime}</div>}
                            </div>
                            <button className="btn btn-success mt-4" type="submit" onClick={saveDevice}>Save</button>
                        </form>
                    </div>
                </div>
            </div>
            
            </div>
    </div>
  )
}

export default DeviceComponent