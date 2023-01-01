import React, { useContext, useEffect } from 'react'
import widthcontext from '../context/widthcontext';
import Accountinfo from '../component/Accountinfo';
import Info from '../component/Info';
import Getdatanote from '../component/Getdatanote';
import Getdataremainder from '../component/Getdataremainder';
import Getdataquestion from '../component/Getdataquestion';
import '../Main.css'
import {
  Routes,
  Route
} from "react-router-dom";
import Secnavbar from '../sec_component/Secnavbar';
import Userdetail from '../component/Userdetail';
import { useNavigate } from 'react-router'
import Getdataotherusers from '../component/Getdataotherusers';
import Searcheduserdetail from '../component/Searcheduserdetail ';

import Voicetotext from '../component/Voicetotext';
import Othernav from '../component/Othernav';
import Texttovoice from '../component/Texttovoice';
function Main() {
  var history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history("/login")
    }
  }, [])
  var { wedth, height } = useContext(widthcontext);
  return (
    <div className='main' style={{  backgroundColor: "rgba(27, 47, 69, 1)" }}>
      <div className='' style={{ height: '10vh' }}>
        <nav className={height ? `navbar navbar-dark navbar-expand-lg active` : "navbar  navbar-dark navbar-expand-lg"}>
          <Secnavbar ham="true" />
        </nav>
      </div>
      <div className='row' style={{}}>
        <div className={wedth ? `col-md-2` : 'd-none'} style={{ height: '90vh', overflowY: 'scroll' }}>
          <Accountinfo />
        </div>
        <div className={wedth ? 'col-md-10 row d-flex' : 'col-md-12 row d-flex'} >
          <div className='col-md-12 bg-light' style={{ width: '100%', height: '90vh', overflowY: 'scroll' }}>
            <Routes>
              <Route path="/" element={<Userdetail />} />
              <Route path="/Vtt" element={<Voicetotext />} />
              <Route path="/Ttv" element={<Texttovoice />} />
              <Route path="/note" element={<Getdatanote />} />
              <Route path="/all/note" element={<Getdatanote />} />
              <Route path="/remainder" element={<Getdataremainder />} />
              <Route path="/question" element={<Getdataquestion />} />
              <Route path="/users" element={<Getdataotherusers />} />
              <Route path="/searcheduser" element={<Searcheduserdetail />} />
              <Route path="/all/question" element={<Getdataquestion />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className={wedth ? `d-none` : ''} >
        {wedth ? `` : (<>
          <div className="collapse multi-collapse position-fixed  bg-dark" id="extranava" style={{ height: "auto", bottom: "44px", width: "50%", right: "0" }}>
            <ol className="list-group list-group-numbered">
              <Othernav />
            </ol>
          </div>
          <div className='position-fixed bottom-0 bg-dark' style={{ height: "auto", width: "100%" }}>
            <Info />
          </div>
        </>
        )}
      </div>
    </div>
  )
}

export default Main