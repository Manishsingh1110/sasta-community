import React, {useContext} from 'react'
// import Notecontext from '../context/Notecontext';
import widthcontext from '../context/widthcontext';

function Getanswer(props) {
    const index = props.props.index
    var { wedth } = useContext(widthcontext);
    const na = props.props.na
    const ans = props.props.ans
    return (
        <>
            <div className="collapse multi-collapse show" id={"multiCollapseExample" + na._id}>
                <ol className="list-group ">
                    <li className="list-group-item mt-2 d-flex justify-content-between align-items-start">
                        <div className=" me-auto">
                            <div className="fw-bold "></div>
                            <div className='container '>
                                <div className='d-inline'>
                                    {(index + 1) + ")"}
                                    <h6 className='d-inline ps-2'>suggestion by {ans.useranswered}<span className="badge bg-info bg-opacity-50 ms-2 rounded-pill">{ans.date}</span></h6>
                                    </div>
                            <div className={wedth ? 'ps-5 pt-2' : 'ps-0 pt-3'} >{ans.Answerdata}</div>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </>
    )
}

export default Getanswer