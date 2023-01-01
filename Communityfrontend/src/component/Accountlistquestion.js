import React from 'react'

function Accountlistquestion(props) {
    const { note } = props;
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold"></div>
                {note.questiondata}
            </div>
            <span className="badge bg-info bg-opacity-50 rounded-pill">{note.date}</span>
        </li>
    )
}

export default Accountlistquestion