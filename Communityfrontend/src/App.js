
import './App.css'

import Widthstate from './context/widthstate';
import React from 'react';
import Notestate from './context/Notesstate';
import Main from './projectdisplay/Main';
import Secmain from './projectdisplay/Secmain';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Secsignin from './sec_component/Secsignin';
import Seclogin from './sec_component/Seclogin';
import Landing from './component/Landing';
function App() {
  return (
    <Router>
      <Widthstate>
        <Notestate>
          <Routes>
          <Route path="/" element={<Landing/>} />
            <Route path="/about/*" element={<Main />} />
            <Route path="/user/*" element={<Secmain />} />
            <Route path="/login" element={<Seclogin />} />
            <Route path="/signin" element={<Secsignin />} />
          </Routes>
        </Notestate>
      </Widthstate>
    </Router>
  );
}

export default App;
