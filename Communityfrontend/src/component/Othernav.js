import React, { useContext } from 'react'
import widthcontext from '../context/widthcontext';
import {
    Link
} from "react-router-dom";
function Othernav() {
    var { wedth } = useContext(widthcontext);
    return (
        <>
            
            <li className={wedth ? "nav-item m-2" : "nav-item mt-2 mb-2"}>
                <Link className="nav-link active" aria-current="page" to="/about/Ttv"><i className={wedth ? "fa-solid fa-font ms-2 me-4" : "fa-solid fa-font ms-2 me-4 fs-2"}></i>Text to voice</Link>
            </li>
            <li className={wedth ? "nav-item m-2" : "nav-item mt-2 mb-2"}>
                <Link className="nav-link active" aria-current="page" to="/about/Vtt"><i className={wedth ? "fa-solid fa-microphone ms-2 me-4" : "fa-solid fa-microphone ms-2 me-4 fs-2"}></i>Voice to text</Link>
            </li>
            {wedth ? ``: (
                <>
                <li className={wedth ? "nav-item m-2" : "nav-item mt-2 mb-2 d-flex justify-content-between"}>
                <Link className="" to="/about/question"><h5 className='ps-2 '>Questions</h5></Link>
                <Link className="" to="/about/question" ><i className="fa-solid fa-caret-down ms-2 me-2 fs-6 right-0"></i></Link>
            </li>
            <li className={wedth ? "nav-item m-2" : "nav-item mt-2 mb-2 d-flex justify-content-between"}>
                <Link className="" to="/about/note"><h5 className='ps-2 '>Notes</h5></Link>
                <Link className=""  to="/about/note" ><i className="fa-solid fa-caret-down ms-2 me-2 fs-6 right-0"></i></Link>
            </li><li className={wedth ? "nav-item m-2" : "nav-item mt-2 mb-2 d-flex justify-content-between"}>
                <Link className="" to="/about/remainder"><h5 className='ps-2 '>Remainders</h5></Link>
                <Link className="" to="/about/remainder" ><i className="fa-solid fa-caret-down ms-2 me-2 fs-6 right-0"></i></Link>
            </li>
            </>
            )}
            
        </>

    )
}

export default Othernav