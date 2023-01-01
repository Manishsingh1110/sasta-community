import React, { useContext } from 'react'
import widthcontext from '../context/widthcontext';
import Accountinfo from '../component/Accountinfo';

import Info from '../component/Info';
import Innernav from '../component/Innernav';
import Navbar from '../component/Navbar';
import Questionform from '../component/Questionform';
import Getdatanote from '../component/Getdatanote';
import Getdataremainder from '../component/Getdataremainder';
import Getdataquestion from '../component/Getdataquestion';
import {
  Routes,
  Route
} from "react-router-dom";
function Main() {
    var wedth=useContext(widthcontext);
  return (
    // <Getdataremainder/>
    <div className='bg-dark'>
      <div className='row' style={{height: '6.8vh',overflow:'hidden'}}>
          <Navbar />
      </div>
      <div className='row' style={{ height: '93.2vh',zIndex:'10',borderTop:'1px solid black'}}>
        <div className={wedth ? `col-md-2`: 'd-none'} style={{height: '93vh',overflowY:'scroll'}}>
        <Accountinfo/>
        </div>
        <div className={wedth ? 'col-md-10 row d-flex': 'col-md-12 row d-flex'} style={{}}>
          <div className='col-md-12' style={{height:'auto'}}>
            <Innernav />
          </div>
          <div className='col-md-12 bg-light' style={{width:'100%',overflowY:'scroll',height: wedth ? `85vh`:'84vh'}}>
          <Routes>
          <Route path="/note" element={<Getdatanote/>}/>
          <Route path="/remainder" element={<Getdataremainder/>}/>
          <Route path="/question" element={<Getdataquestion/>}/>
        </Routes>  
          </div>
        </div>
      </div>
      <div className={wedth ? `d-none`:'position-fixed bottom-0 bg-dark'}>
        {wedth ? ``: <Info/>}
      </div>
    </div>
  )
}

export default Main