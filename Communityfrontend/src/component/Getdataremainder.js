import React, { useContext, useEffect } from 'react'
import Notecontext from '../context/Notecontext';
import Notee from './Notee';
import Formsremainder from './Formsremainder';
import widthcontext from '../context/widthcontext';
const Getdataremainder = () => {
    var {wedth} = useContext(widthcontext);
    var context = useContext(Notecontext);
    var {Remaind,getremainders} = context
    useEffect(()=>{
        getremainders()
    },[])
    
    return (
        <div className={wedth ? "row p-4" : "row p-1 pb-5 mb-5"}>
            <figure className='d-flex justify-content-between'>
                <figcaption className="blockquote-footer fs-2">
                    Remainders
                </figcaption>
                <button type="button" className="btn btn-success justify-content-end" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="fa-solid fa-plus me-1"></i>Add remainder
            </button>
            </figure>
            <Formsremainder/>
            {Remaind.length === 0 ?
                <>
                    <div className='p-5 mt-5  text-secondary'>
                        <figcaption className="fs-2 p-5 ms-5 ">There is no Remainders available</figcaption>
                    </div>
                </> :
            Remaind.map((remaind) => {
                return <Notee note={remaind}/>;
            }
            )}
        </div>
    )
}

export default Getdataremainder