import React, { useState, useEffect, useContext } from "react";
import Notecontext from '../context/Notecontext';
// import Formsquestion from './Formsquestion';
import widthcontext from '../context/widthcontext';
import Formsanswer from './Formsanswer';
import {
    Link,
    useLocation
} from "react-router-dom";
import Getanswer from './Getanswer';
import Formsfile from "./Formsfile";
function Searcheduserdetail() {
    var { wedth } = useContext(widthcontext);
    var context = useContext(Notecontext);
    var { users, Quesbank2, getexactuser,Notebank1,getexactnotes} = context
    useEffect(() => {
        getexactuser(users[0]._id)
        getexactnotes(users[0]._id)
        // getusernote(users[0]._id)
    }, [])
    console.log(Notebank1)
    var name = users[0].username;
    var nam = name.charAt(0)
    nam=nam.toLowerCase()
    var [id, seti] = useState({ id: "" })
    const handleclick = async (e) => {
        e.preventDefault();
        var n = e.target.id;
        seti({ ...id, id: n })
        
    }
    // console.log(Quesbank2)
    return (
        <>
            <div className='p-5 row'>
                <div className="col-md-1 top-50 position-relative fs-1 text-light bg-success rounded-circle border border-2 border-success">
            <i class={`fa-solid fa-${nam} p-4 ms-1`}></i>
            </div>
            {users.length === 0 ?
                    <>
                        <div className='p-3 mt-5  text-secondary'>
                            <figcaption className="fs-2 ms-5 ">There is no data available</figcaption>
                        </div>
                    </> :
                <figcaption className="text-secondary fs-2 ps-4 col-md-11">
                    Hii.. I Am {users[0].username}<br></br>these are few of my doubts and notes..
                </figcaption>
}
            </div>
            <div className={wedth ? "row p-4" : "row p-1"}>
                <figure className='d-flex justify-content-between'>
                    <figcaption className="blockquote-footer fs-2">
                        Notes
                    </figcaption>
                </figure>
                {Notebank1.length == 0 ?
                <>
                    <div className='p-5 mt-5  text-secondary'>
                        <figcaption className="fs-2 p-5 ms-5 ">There is no Note available</figcaption>
                    </div>
                </> : (
                    Notebank1.map((remaind) => {
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
                                                                            <h6 className='d-inline ps-2'><a className='text-decoration-underline ms-2  text-light p-2' href={`http://localhost:3001/uploadeddata/${pdfs.userid}/${pdfs.filename}`}>{pdfs.filename}</a><span className="badge bg-info bg-opacity-50 ms-2 rounded-pill">{pdfs.date}</span></h6>
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
                    ))}
            </div>
            <div className={wedth ? "row p-4 position-relative" : "row p-1"}>
                <figure className='d-flex justify-content-between'>
                    <figcaption className="blockquote-footer fs-2">
                        Questions
                    </figcaption>
                </figure>
                {
                    Quesbank2.map((remaind) => {
                        var na = remaind.question;
                        var naa = remaind.answer;
                        var noofsuggestion = naa.length;
                        return (
                            <>
                                <div className={wedth ? "card border-light bg-secondary  col-md-11 m-3" : "card border-light bg-secondary  col-md-3 mt-3"}>
                                    <div className="card-header ">{na.date}</div>
                                    <div className="card-body">
                                        <p className="card-text">{na.questiondata}</p>
                                        <div className=' d-flex justify-content-between'>
                                            <h5 className='ps-2 '>suggestions(<h6 className='d-inline'>{noofsuggestion}</h6>)</h5>
                                            <Link className="" data-bs-toggle="collapse" to={"#multiCollapseExample" + na._id} role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><i className="fa-solid fa-caret-down ms-2 me-2 fs-6 right-0"></i></Link>
                                        </div>
                                        {naa.map((Ans, index) => {
                                            return (<Getanswer props={{ "ans": Ans, "na": na, "index": index }} />

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
        </>
    )
}

export default Searcheduserdetail