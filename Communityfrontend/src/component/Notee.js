import React, { useContext } from 'react'
import widthcontext from '../context/widthcontext';
import Notecontext from '../context/Notecontext';
import {
  useLocation
} from "react-router-dom";
import { useNavigate } from 'react-router'
function Notee(props) {
  var history = useNavigate();
  var { wedth } = useContext(widthcontext);
  var context = useContext(Notecontext);
  var { deleteremainder, deletenote } = context
  const { note } = props;
  let location = useLocation();
  var remaind = false;
  if (location.pathname === "/about/remainder"){
    remaind = true;
  }
  const handleclick = (e) => {
    e.preventDefault();
    deleteremainder(note._id)
    history("/about/")
  }
  const handleclicknote = (e) => {
    e.preventDefault();
    deletenote(note._id)
    history("/about/")
  }
  var today = note.till
  var now = new Date();
  var date = (String(now.getFullYear())) + "-" + (String(now.getMonth() + 1).padStart(2, '0')) + "-" + (String(now.getDate()+1).padStart(2, '0'))
  if (today === date) {
    deleteremainder(note._id)
    history("/about/")
  }

  return (
    <div className={wedth ? "card border-light bg-secondary  col-md-3 m-3 " : "card border-light bg-secondary  col-md-4 mt-3"}>
      <div className="card-header ">{note.date}</div>
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}</p>
        {remaind && <p className="card-text">Remainder for {note.till}</p>}
      </div>
      <div>
        {remaind && <i className="fa-solid fa-trash float-end me-4 mb-2 fs-5 mt-3" onClick={handleclick}></i>}
        {!remaind && <i className="fa-solid fa-trash float-end me-4 mb-2 fs-5 mt-3" onClick={handleclicknote}></i>}
      </div>
    </div>
  )
}

export default Notee