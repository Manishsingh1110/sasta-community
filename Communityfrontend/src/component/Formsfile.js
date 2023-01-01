import React, { useState } from 'react'
import { useNavigate } from 'react-router'
function Formsfile(props) {
    var authtoken = localStorage.getItem("token")
    var history = useNavigate();
    const [usersid, setusersid] = useState({ files: "" })
    const handleclick = (e) => {
        e.preventDefault();
        handleImageUpload()
    }
    var back="https://sastacommunity.herokuapp.com/"
    const handleImageUpload = event => {
        const files = [usersid.files]
        const formData = new FormData()
        formData.append('myFile', files[0])
        fetch(`${back}upload`, {
            method: 'POST',
            headers: {
                "auth-token": authtoken,
                "id":props.id,
            },
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                history("/about")
            })
            .catch(error => {
                alert(error)
            })
    }
    const onchange = (e) => {
        setusersid({ ...usersid, [e.target.name]: e.target.files[0] })
    }
    return (
        <div className=''>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal20" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><figcaption className="blockquote-footer fs-2">
                                Add New Note
                            </figcaption></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-floating mb-3">
                                    <div className="input-group mb-3">
                                        <input type="file" className="form-control" name='files' onChange={onchange} id="fil" />
                                        <label className="input-group-text" htmlFor="fil">Upload</label>
                                    </div>s
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

export default Formsfile