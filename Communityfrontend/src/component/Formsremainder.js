import React, { useContext, useState } from 'react'
// import widthcontext from '../context/widthcontext';
import Notecontext from '../context/Notecontext';
import { useNavigate } from 'react-router'
function Formsremainder() {
    var context = useContext(Notecontext);
    var { addremainder } = context
    var history = useNavigate();
    const [remainder, setremainder] = useState({ title: "", description: "", tag: "",till:"" })
    const handleclick = (e) => {
        e.preventDefault();
        addremainder(remainder.title, remainder.description, remainder.tag, remainder.till)
        history("/about") 
    }
    const onchange = (e) => {
        setremainder({ ...remainder, [e.target.name]: e.target.value })
    }
    return (
        <div className=''>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><figcaption className="blockquote-footer fs-2">
                                Add New remainder
                            </figcaption></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" required name='title' onChange={onchange} placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "60px" }} aria-describedby="titlehelp"></textarea>
                                    <label htmlFor="floatingTextarea">Enter The Title</label>
                                    <div id="titlehelp" className="form-text">please Enter some title .</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" name='description' onChange={onchange} placeholder="Leave a comment here" style={{ height: "100px" }} id="floatingTextarea2" />
                                    <label htmlFor="floatingTextarea2" >Description</label>
                                    <div id="questionhelp" className="form-text">please Enter some details.</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" name='tag' onChange={onchange} placeholder="Leave a comment here" style={{ height: "70px" }} id="floatingTextarea" />
                                    <label htmlFor="floatingTextarea" className="form-label">Tag</label>
                                    <div id="questionhelp" className="form-text">Please Enter the Tag .</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="date" className="form-control" name='till' onChange={onchange} placeholder="Leave a comment here" style={{ height: "70px" }} id="floatingTextarea" />
                                    <label htmlFor="floatingTextarea" className="form-label">For Date</label>
                                    <div id="questionhelp" className="form-text">Please Enter the Tag .</div>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" onClick={handleclick} data-bs-dismiss="modal">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formsremainder