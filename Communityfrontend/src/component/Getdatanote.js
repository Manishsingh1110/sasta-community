import React, { useContext, useEffect, useState } from 'react'
import Notecontext from '../context/Notecontext';
// import Notee from './Notee';
import Formsnote from './Formsnote';
import widthcontext from '../context/widthcontext';
import {
    Link,
    useLocation
} from "react-router-dom";
import Formsfile from './Formsfile';
const Getdatanote = () => {
    var { wedth } = useContext(widthcontext);
    var context = useContext(Notecontext);
    let location = useLocation();
    var All=false;
    var { getnote, getexactnotesall, Notebank, getnotesall, Notebank2 } = context
    if (location.pathname === "/about/all/note") {
        All = true;
        
    }
    useEffect(() => {
        getnote()
        getnotesall()
        getexactnotesall()
    }, [])
    var [id, seti] = useState({ id: "" })
    const handleclick = async (e) => {
        e.preventDefault();
        var n = e.target.id;
        await seti({ ...id, id: n })
    }
    // console.log(All)
    return (
        <div className={wedth ? "row p-4" : "row p-1 mb-5 pb-5"}>
            <figure className='d-flex justify-content-between'>
                <figcaption className="blockquote-footer fs-2">
                    Notes
                </figcaption>
                <button type="button" className="btn btn-success justify-content-end" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i className="fa-solid fa-plus me-1"></i>Add Note
                </button>
            </figure>
            <Formsnote />
            {All && (Notebank2.length === 0 ?
                <>
                    <div className='p-5 mt-5  text-secondary'>
                        <figcaption className="fs-2 p-5 ms-5 ">There is no Note available</figcaption>
                    </div>
                </> : (
                    Notebank2.map((remaind) => {
                        var note = remaind.Note;
                        var pdf = remaind.Pdf;
                        var noofsuggestion = pdf.length;
                        return (
                            <>
                                <div className={wedth ? "card border-light bg-secondary  col-md-11 m-3" : "card border-light bg-secondary  col-md-3 mt-3"}>
                                    <div className="card-header ">{note.date}</div>
                                    <div className="card-body">
                                        <div className="card-title ">{note.title}</div>
                                        <p className="card-text">{note.description}</p>

                                        <div className=' d-flex justify-content-between'>
                                            <h5 className='ps-2 '>Files(<span className='d-inline'>{noofsuggestion}</span>)</h5>
                                            <Link className="" data-bs-toggle="collapse" to={"#multiCollapseExample" + note._id} role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><i className="fa-solid fa-caret-down ms-2 me-2 fs-6 right-0"></i></Link>
                                        </div>
                                        {pdf.map((pdfs, index) => {
                                            return (
                                                <>
                                                    <div className="collapse multi-collapse show" id={"multiCollapseExample" + note._id}>
                                                        <ol className="list-group ">
                                                            <li className="list-group-item mt-2 d-flex justify-content-between align-items-start">
                                                                <div className=" me-auto">
                                                                    <div className="fw-bold "></div>
                                                                    <div className='container '>
                                                                        <div className='d-inline'>
                                                                            {(index + 1) + ")"}
                                                                            <h6 className='d-inline ps-2'><a className='text-decoration-underline ms-2  text-light p-2' href={`https://sastacommunity.herokuapp.com/uploadeddata/${pdfs.userid}/${pdfs.filename}`}>{pdfs.filename}</a><span className="badge bg-info bg-opacity-50 ms-2 rounded-pill">{pdfs.date}</span></h6>
                                                                        </div>
                                                                        <div className={wedth ? 'ps-5 pt-2' : 'ps-0 pt-3'} ></div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </>
                                            );
                                        }
                                        )}
                                    </div>
                                    
                                </div>
                            </>
                        );
                    }
                    )))
            }
            {!All && (Notebank.length === 0 ?
                <>
                    <div className='p-5 mt-5  text-secondary'>
                        <figcaption className="fs-2 p-5 ms-5 ">There is no Note available</figcaption>
                    </div>
                </> : (
                    Notebank.map((remaind) => {
                        var note = remaind.Note;
                        var pdf = remaind.Pdf;
                        var noofsuggestion = pdf.length;
                        return (
                            <>
                                <div className={wedth ? "card border-light bg-secondary  col-md-11 m-3" : "card border-light bg-secondary  col-md-3 mt-3"}>
                                    <div className="card-header ">{note.date}</div>
                                    <div className="card-body">
                                        <div className="card-title ">{note.title}</div>
                                        <p className="card-text">{note.description}</p>

                                        <div className=' d-flex justify-content-between'>
                                            <h5 className='ps-2 '>Files(<span className='d-inline'>{noofsuggestion}</span>)</h5>
                                            <Link className="" data-bs-toggle="collapse" to={"#multiCollapseExample" + note._id} role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><i className="fa-solid fa-caret-down ms-2 me-2 fs-6 right-0"></i></Link>
                                        </div>
                                        {pdf.map((pdfs, index) => {
                                            return (
                                                <>
                                                    <div className="collapse multi-collapse show" id={"multiCollapseExample" + note._id}>
                                                        <ol className="list-group ">
                                                            <li className="list-group-item mt-2 d-flex justify-content-between align-items-start">
                                                                <div className=" me-auto">
                                                                    <div className="fw-bold "></div>
                                                                    <div className='container '>
                                                                        <div className='d-inline'>
                                                                            {(index + 1) + ")"}
                                                                            <h6 className='d-inline ps-2'><a className='text-decoration-underline ms-2  text-light p-2' href={`https://sastacommunity.herokuapp.com/uploadeddata/${pdfs.userid}/${pdfs.filename}`}>{pdfs.filename}</a><span className="badge bg-info bg-opacity-50 ms-2 rounded-pill">{pdfs.date}</span></h6>
                                                                        </div>
                                                                        <div className={wedth ? 'ps-5 pt-2' : 'ps-0 pt-3'} ></div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </>
                                            );
                                        }
                                        )}
                                    </div>
                                    <button type="button" className="btn btn-success justify-content-end" onClick={handleclick} data-bs-toggle="modal" id={note._id} data-bs-target="#exampleModal20">
                                        <i className="fa-solid fa-plus me-1"></i>Add your Files
                                    </button>
                                    <Formsfile id={id.id} />
                                </div>
                            </>
                        );
                    }
                    )))}
        </div>

    )
}

export default Getdatanote