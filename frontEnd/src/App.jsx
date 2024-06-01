import { useState } from 'react'
import './App.css'
import ListDevicesComponent from './components/ListDevicesComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DeviceComponent from './components/DeviceComponent';

function App() {
 

  return (
    <>
    <BrowserRouter>
       <HeaderComponent />
        <Routes> 
          {/* http://localhost:3000 */}
          <Route path='/' element={ <ListDevicesComponent /> }></Route> 
          {/* http://localhost:3000/devices */}
          <Route path='/devices' element={ <ListDevicesComponent /> }></Route> 
          {/* http://localhost:3000/add-device */}
          <Route path='/add-device' element={ <DeviceComponent /> }></Route> 
                  {/* http://localhost:3000/edit-device */}
                  <Route path='/edit-device/:id' element={ <DeviceComponent /> }></Route> 
        </Routes>
       <FooterComponent />
    </BrowserRouter>

    </>
  )
}

export default App
