import React from 'react'

function Questionform() {
    return (
        <div className='p-5'>
            <figure className='m-3'>
                <figcaption className="blockquote-footer fs-2">
                    Add New Question
                </figcaption>
            </figure>
            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" placeholder="Leave a comment here" style={{ height: "100px" }} id="floatingTextarea2" />
                    <label for="floatingTextarea2" >Question</label>
                    <div id="questionhelp" className="form-text">Please Enter Your Doubt.</div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Questionform