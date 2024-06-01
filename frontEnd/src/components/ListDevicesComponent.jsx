import React, {useEffect, useState} from 'react'
import { deleteDevice, listDevices } from '../services/DeviceService'
import { useNavigate } from 'react-router-dom' 

const ListDevicesComponent = () => {
       const [devices, setDevices] = useState([])
       const navigator = useNavigate();

       useEffect(() => {
              getAllDevices(); 
       }, [])

       function getAllDevices(){
                listDevices().then((response) => {
                        setDevices(response.data);
                }).catch(error => {
                        console.error('There was an error!', error);
                })
       }

       function addNewDevice(){
                navigator('/add-device')
       }

       function updateDevice(id) {
        navigator(`/edit-device/${id}`)
       }

       function removeDevice(id) {
        console.log(`Device id to delete: ${id}`)

        deleteDevice(id).then((response) => {
                getAllDevices();
                }).catch(error => {     
                console.error('There was an error!', error)     
       })

       }

  return (
        <div className='container'>
        <h2 className="text-center">Device List</h2>
        <button className='btn btn-primary mb-2' onClick={addNewDevice}>
                Add Device
        </button>
        <div className="row">
          <table className="table table-striped">
            <thead>
                <tr>
                  <th>Device Id</th>
                  <th>Device Name</th>
                  <th>Device Model</th>
                  <th>Device Status</th>
                  <th>Device Enrolled Time</th>
                  <th>Actions</th>
                </tr>
            </thead>
                <tbody>
                        {
                        devices.map(
                        device => 
                        <tr key={device.id}>
                                <td>{device.id}</td>
                                <td>{device.name}</td>
                                <td>{device.model}</td>
                                <td>{device.status}</td>
                                <td>{device.enrolledTime}</td>
                                <td>
                                        <butto className='btn btn-info' onClick={()=> updateDevice(device.id)}>Update</butto>
                                        <butto className='btn btn-danger' onClick={()=> removeDevice(device.id)} style={{marginLeft: '10px'}}>Delete</butto>
                                </td>
                        </tr>
                        )
                        }
                </tbody>
                </table>
        </div>
        </div>
  )

}

export default ListDevicesComponent