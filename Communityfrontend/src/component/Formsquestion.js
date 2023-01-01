import React, { useContext, useState } from 'react'
// import widthcontext from '../context/widthcontext';
import Notecontext from '../context/Notecontext';
import { useNavigate } from 'react-router'
function Formsremainder() {
    var context = useContext(Notecontext);
    var { addquestion } = context
    var history = useNavigate();
    const [question, setquestion] = useState({ questiondata: ""})
    const handleclick = (e) => {
        e.preventDefault();
        addquestion(question.questiondata)
        history("/about") 
    }
    const onchange = (e) => {
        setquestion({ ...question, [e.target.name]: e.target.value })
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
                                    <textarea className="form-control" required name='questiondata' onChange={onchange} placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "100px" }} aria-describedby="titlehelp"></textarea>
                                    <label htmlFor="floatingTextarea">Enter Your Doubt</label>
                                    <div id="titlehelp" className="form-text">please Enter some Doubt .</div>
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