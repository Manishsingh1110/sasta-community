
import React, { useContext } from 'react'
import widthcontext from '../context/widthcontext';
import {
    Link,
    useLocation
} from "react-router-dom";
import Othernav from './Othernav';
function Info() {
    var { wedth } = useContext(widthcontext);
    var extranav=document.getElementById("extranava");
    const handleclick = (e) => {
        e.preventDefault();
        if(extranav.style.display==="none"){
            console.log("yes")
        }
        else if(extranav.style.display==="block"){
            console.log("no")
        }
    }
    return (
        <>
            
            <div className={wedth ? "collapse multi-collapse show nav flex-column" : "p-0"} id={wedth ? "multiCollapseExample4 nav" : ""}>
                <ol className={wedth ? "list-group list-group-numbered" : "d-flex list-group-numbered p-0 justify-content-evenly"}>
                    <li className={wedth ? "nav-item m-2" : "nav-item mt-2 mb-2"}>
                        <Link className="nav-link active" aria-current="page" to="/about/"><i className={wedth ? "fa-solid fa-user ms-2 me-4" : "fa-solid fa-user ms-2 me-4 fs-2"}></i>{wedth ? 'Account' : ''}</Link>
                    </li>
                    <li className={wedth ? "nav-item m-2" : "nav-item mt-2 mb-2"}>
                        <Link className="nav-link" to="/about/all/note"><i className={wedth ? "fa-solid fa-book ms-2 me-4" : "fa-solid fa-book ms-2 me-4 fs-2"}></i>{wedth ? 'Notes' : ''}</Link>
                    </li>
                    <li className={wedth ? "nav-item m-2" : "nav-item mt-2 mb-2"}>
                        <Link className="nav-link" to="/about/all/question"><i className={wedth ? "fa-solid fa-circle-question ms-2 me-4" : "fa-solid fa-circle-question ms-3 me-4 fs-2"}></i>{wedth ? 'Questions' : ''}</Link>
                    </li>
                    <li className={wedth ? "nav-item m-2" : "nav-item mt-2 mb-2"}>
                <Link className="nav-link active" aria-current="page" to="/about/users"><i className={wedth ? "fa-solid fa-user ms-2 me-4" : "fa-solid fa-user ms-2 me-4 fs-2"}></i>{wedth ? 'Find users' : ''}</Link>
            </li>
                    {wedth ? (<li className={wedth ? "nav-item m-2" : "nav-item mt-2 mb-2"}>
                        <Link className="nav-link active" data-bs-toggle="collapse" to="#multiCollapseExampleother" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><i className={wedth ? "fa-solid fa-otter ms-2 me-4" : "fa-solid fa-otter ms-2 me-4 fs-2"}></i>{wedth ? 'Other feature' : ''}</Link>
                        <div className="collapse multi-collapse" id="multiCollapseExampleother">
                            <ol className="list-group list-group-numbered">
                                <Othernav />
                            </ol> </div>
                    </li>) : (
                        ""
                    )}
                    {wedth ? (
                        ""
                    ) : (<li className={wedth ? "nav-item m-2" : "nav-item mt-2 mb-2"}>
                        <Link className="nav-link active" data-bs-toggle="collapse" to="#extranava" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><i className={wedth ? "fa-solid fa-otter ms-2 me-4" : "fa-solid fa-otter ms-2 me-4 fs-2"}></i>{wedth ? 'Other feature' : ''}</Link>
                    </li>)
                    }
                </ol>

            </div>
        </>
    )
}

export default Info