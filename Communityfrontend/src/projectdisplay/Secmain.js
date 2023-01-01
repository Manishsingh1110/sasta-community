import React, { useContext} from 'react'
import widthcontext from '../context/widthcontext';
import Secabout from '../sec_component/Secabout'
import Seccontact from '../sec_component/Seccontact'
import Secfooter from '../sec_component/Secfooter'
import Sechero from '../sec_component/Sechero'
import Secmainitem from '../sec_component/Secmainitem'
import Secnavbar from '../sec_component/Secnavbar'
import Secservices from '../sec_component/Secservices'
import Secteam from '../sec_component/Secteam'
import {
  Routes,
  Route
} from "react-router-dom";
function Secmain() {
  var {height}=useContext(widthcontext);
  return (
    <>
      <nav className={height ? `navbar navbar-dark navbar-expand-lg active  fixed-top` : "navbar  navbar-dark navbar-expand-lg  fixed-top"}> 
          <Secnavbar/>
          </nav>
      <Routes>
          <Route  path="/" element={<><Sechero /><Secmainitem /></>} />
          <Route  path="/about" element={<Secabout/>} />
          <Route  path="/services" element={<Secservices />} />
          <Route  path="/team" element={<Secteam />} />
          <Route  path="/contact" element={<Seccontact />} />
        </Routes>
      <Secfooter />
    </>
  )
}

export default Secmain