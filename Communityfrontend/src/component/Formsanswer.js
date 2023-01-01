import React, { useContext,useState } from 'react'
import { useNavigate } from 'react-router'
// import widthcontext from '../context/widthcontext';
import Notecontext from '../context/Notecontext';
function Formsanswer(props) {
    var context = useContext(Notecontext);
    var { addanswer } = context
    var history = useNavigate();
    var idi=props.id;
    const [Answer, setAnswer] = useState({ Answerdata: ""})
    const handleclick = (e) => {
        e.preventDefault();
        var id=e.target.id
        addanswer(Answer.Answerdata,id)
        history("/about")  
    }
    const onchange = (e) => {
        setAnswer({ ...Answer, [e.target.name]: e.target.value })
    }
    return (
        <div className=''>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><figcaption className="blockquote-footer fs-2">
                                Add your opinion
                            </figcaption></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" required name='Answerdata' onChange={onchange} placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "100px" }} aria-describedby="titlehelp"></textarea>
                                    <label htmlFor="floatingTextarea">Enter Your opinion</label>
                                    <div id="titlehelp" className="form-text">please Enter some opinion .</div>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" id={idi} className="btn btn-primary" onClick={handleclick} data-bs-dismiss="modal">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formsanswer