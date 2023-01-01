import React, { useState, useContext, useEffect } from 'react'
import Notecontext from '../context/Notecontext';
import Formsquestion from './Formsquestion';
import widthcontext from '../context/widthcontext';
import Formsanswer from './Formsanswer';
import {
    Link,
    useLocation
  } from "react-router-dom";
import Getanswer from './Getanswer';
const Getdataquestion = () => {
    var {wedth} = useContext(widthcontext);
    var context = useContext(Notecontext);
    var { Quesbank,Quesbank1, getexact,getexactall} = context;
    var [id, seti] = useState({ id: "" })
    var All=false;
    let location = useLocation();
    if (location.pathname === "/about/all/question") {
        All = true;
    }
    const handleclick = async (e) => {
        e.preventDefault();
        var n = e.target.id;
        await seti({ ...id, id: n })
    }
    useEffect(() => {
        !All && getexact()
        All && getexactall()
    }, [])
    return ( 
        <div className={wedth ? "row p-4" : "row p-1 mb-5 pb-5"}>
            <figure className='d-flex justify-content-between'>
                <figcaption className="blockquote-footer fs-2">
                    Questions
                </figcaption>
                <button type="button" className="btn btn-success justify-content-end" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i className="fa-solid fa-plus me-1"></i>Add Question
                </button>
            </figure>
            <Formsquestion />
            {All && Quesbank1.length === 0 ? <>
                    <div className='p-5 mt-5  text-secondary'>
                        <figcaption className="fs-2 p-5 ms-5 ">There is no Question available</figcaption>
                    </div>
                </> : ""}
            {!All && Quesbank.length === 0 ? <>
                    <div className='p-5 mt-5  text-secondary'>
                        <figcaption className="fs-2 p-5 ms-5 ">There is no Question available</figcaption>
                    </div>
                </> : ""}
            {All && Quesbank1.map((remaind) => {
                var na = remaind.question;
                var naa = remaind.answer;
                var noofsuggestion=naa.length;
                return (
                    <>
                        <div className={wedth ? "card border-light bg-secondary  col-md-11 m-3" : "card border-light bg-secondary  col-md-3 mt-3"}>
                            <div className="card-header ">{na.date}</div>
                            <div className="card-body">
                                <p className="card-text">{na.questiondata}</p>
                                <div className=' d-flex justify-content-between'>
                                            <h5 className='ps-2 '>suggestions(<span className='d-inline'>{noofsuggestion}</span>)</h5>
                                                <Link className="" data-bs-toggle="collapse" to={"#multiCollapseExample" + na._id} role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><i className="fa-solid fa-caret-down ms-2 me-2 fs-6 right-0"></i></Link>
                                            </div>
                                {naa.map((Ans,index) => {
                                    return (<Getanswer props={{"ans":Ans,"na":na,"index":index}}/>
                                        
                                    );
                                }
                                )}
                            </div>
                            <button type="button" className="btn btn-success justify-content-end" onClick={handleclick} data-bs-toggle="modal" id={na._id} data-bs-target="#exampleModal1">
                                <i className="fa-solid fa-plus me-1"></i>Give your opinion
                            </button>
                            <Formsanswer id={id.id} />
                        </div>
                    </>
                );
            }
            )}
            {!All && Quesbank.map((remaind) => {
                var na = remaind.question;
                var naa = remaind.answer;
                var noofsuggestion=naa.length;
                return (
                    <>
                        <div className={wedth ? "card border-light bg-secondary  col-md-11 m-3" : "card border-light bg-secondary  col-md-3 mt-3"}>
                            <div className="card-header ">{na.date}</div>
                            <div className="card-body">
                                <p className="card-text">{na.questiondata}</p>
                                <div className=' d-flex justify-content-between'>
                                            <h5 className='ps-2 '>suggestions(<span className='d-inline'>{noofsuggestion}</span>)</h5>
                                                <Link className="" data-bs-toggle="collapse" to={"#multiCollapseExample" + na._id} role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><i className="fa-solid fa-caret-down ms-2 me-2 fs-6 right-0"></i></Link>
                                            </div>
                                {naa.map((Ans,index) => {
                                    return (<Getanswer props={{"ans":Ans,"na":na,"index":index}}/>
                                        
                                    );
                                }
                                )}
                            </div>
                            <button type="button" className="btn btn-success justify-content-end" onClick={handleclick} data-bs-toggle="modal" id={na._id} data-bs-target="#exampleModal1">
                                <i className="fa-solid fa-plus me-1"></i>Give your opinion
                            </button>
                            <Formsanswer id={id.id} />
                        </div>
                    </>
                );
            }
            )}
        </div >
    )
}

export default Getdataquestion