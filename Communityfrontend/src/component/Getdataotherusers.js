import React, { useContext, useState } from 'react'
import Notecontext from '../context/Notecontext';
import widthcontext from '../context/widthcontext';
import {
    Link
} from "react-router-dom";
const Getdataotherusers = () => {
    var { wedth } = useContext(widthcontext);
    var context = useContext(Notecontext);
    var { users, getanyuser} = context
    const [usersid, setusersid] = useState({ id: "" })
    const handleclick = (e) => {
        e.preventDefault();
        getanyuser(usersid.id)
    }
    const onchange = (e) => {
        setusersid({ ...usersid, [e.target.name]: e.target.value })
    }
    
    if(users.length !== 0){
    var name = users[0].username;
    var nam = name.charAt(0)
    nam = nam.toLowerCase()
}
    return (
        <div className={wedth ? "row p-4" : "row p-1"}>
            <figure className='d-flex justify-content-between'>
                <figcaption className="blockquote-footer fs-2">
                    Other users
                </figcaption>
            </figure>

            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" required name='id' onChange={onchange} placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "70px" }} aria-describedby="titlehelp"></textarea>
                    <label htmlFor="floatingTextarea">Enter users id/Username</label>
                    <div id="titlehelp" className="form-text">please Enter some Details</div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
            </form>
            {users.length === 0 ?
                <>
                    <div className='p-5  text-secondary'>
                        <figcaption className="fs-2 p-5 ms-5 ">Please enter some Details</figcaption>
                    </div>
                </> :
                users.map((remaind) => {
                    return (
                        <>
                            <div className={wedth ? "card border-light bg-secondary  col-md-3 m-3 " : "card border-light bg-secondary  col-md-4 mt-3"}>
                                <div className="card-header "><div className="text-light fs-5 d-inline bg-success rounded-circle border border-2 border-success">
                                    <i className={`fa-solid fa-${nam} p-2 m-1`}></i>
                                </div><div className='ms-3 d-inline'>{remaind._id}</div></div>
                                <div className="card-body">
                                    <h5 className="card-title">{remaind.username}</h5>
                                    <p className="card-text">{remaind.email}</p>
                                </div>
                                <Link to="/about/searcheduser" className="btn btn-success">lets Go</Link>
                                <div>
                                </div>
                            </div>
                        </>
                    );
                }
                )}
        </div>
    )
}

export default Getdataotherusers