import React, { useContext, useEffect } from 'react'
import Notecontext from '../context/Notecontext';
import Accountlistdetail from './Accountlistdetail';
import Accountlistquestion from './Accountlistquestion';
import Info from './Info';
import {
    Link
} from "react-router-dom";
export default function Accountinfo() {
    var context = useContext(Notecontext);
    var { Remaind, getremainders, Note, getnote, Question, getexact, Quesbank, getquestion } = context
    useEffect(() => {
        getremainders()
        // console.log(Remaind)
    })
    useEffect(() => {
        getnote()
        // console.log(Note)
    })
    useEffect(() => {
        getquestion()
    })
    return (
        <div className='mt-3'>
            <div className='overalldetails'>
                <div className='d-flex justify-content-between'>
                    <Link className="" to="/about/remainder"><h5 className='ps-2 '>Info</h5></Link>
                    <Link className="" data-bs-toggle="collapse" to="#multiCollapseExample4" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><i className="fa-solid fa-caret-down ms-2 me-2 fs-6 right-0"></i></Link>
                </div>
                <Info />
            </div>
            <hr />
            <div className='questiondetails'>
                <div className=' d-flex justify-content-between'>
                    <Link className="" to="/about/question"><h5 className='ps-2 '>Questions</h5></Link>
                    <Link className="" data-bs-toggle="collapse" to="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><i className="fa-solid fa-caret-down ms-2 me-2 fs-6 right-0"></i></Link>
                </div>
                <div className="collapse multi-collapse show" id="multiCollapseExample1">
                    <ol className="list-group list-group-numbered">
                    {Question.length === 0 ? (<li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">There is no Question available</div>
                                    </div>

                                </li>) :
                                    (Question.map((note) => {
                                        return <Accountlistquestion note={note} />;
                                    }
                                    ))}
                        </ol>
                </div>
            </div>




            <hr />
            <div className='notesdetails'>
                <div className=' d-flex justify-content-between'>
                    <Link className="" to="/about/note"><h5 className='ps-2 '>Notes</h5></Link>
                    <Link className="" data-bs-toggle="collapse" to="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><i className="fa-solid fa-caret-down ms-2 me-2 fs-6 right-0"></i></Link>
                </div>
                <div className="collapse multi-collapse" id="multiCollapseExample2">
                    <ol className="list-group list-group-numbered" id='1'>

                        {Note.length === 0 ? (<li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">There is no Note available</div>
                                    </div>

                                </li>) :
                                    (Note.map((note) => {
                                        return <Accountlistdetail note={note} />;
                                    }
                                    ))}
                    </ol>
                </div>
            </div>
            <hr />
            <div className='remainderdetails'>
                <div className=' d-flex justify-content-between'>
                    <Link className="" to="/about/remainder"><h5 className='ps-2 '>Remainders</h5></Link>
                    <Link className="" data-bs-toggle="collapse" to="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><i className="fa-solid fa-caret-down ms-2 me-2 fs-6 right-0"></i></Link>
                </div>
                <div className="collapse multi-collapse" id="multiCollapseExample3">
                    <ol className="list-group list-group-numbered" id='1'>
                        {Remaind.length === 0 ? (<li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">There is no remainder available</div>
                                    </div>

                                </li>) :


                                    (Remaind.map((note) => {
                                        return <Accountlistdetail note={note} />;
                                    }
                                    ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}
