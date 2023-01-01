import React, { useState, useEffect, useContext } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import widthcontext from '../context/widthcontext';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css';
function Secreview() {
    const [review, setreview] = useState({ Name: "", comments: "",Rate:"" })
    const [allreview, setallreview] = useState([])
    var { wedth } = useContext(widthcontext);
    const handleclick = (e) => {
        e.preventDefault();
        reviews(review.Name, review.comments,review.Rate)
    }
    const onchange = (e) => {
        setreview({ ...review, [e.target.name]: e.target.value })
    }
    const reviews = async (Name, comments,Rate) => {
        // Default options are marked with *
        const response = await fetch('https://sastacommunity.herokuapp.com/app/review', {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ Name, comments,Rate })
        });
        const json = await response.json()
    }
    const getreview = async () => {
        const response = await fetch('http://127.0.0.1:8000/dssa/', {
            mode: 'cors',
            headers: {
                "Content-type": "application/json;charset=UTF-8"
            }
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body data type must match "Content-Type" header
        });
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
        const json = await response.json()
        console.log(json)
    }
    useEffect(() => {
        getreview()
    }, [])

    return (
        <>
            <section style={{ padding: "20px 0" }}>
                <div className="section-header">
                    <h2>User Reviews</h2>
                    <button type="button" className="btn btn-primary position-relative" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ float: "right", top: "-4vw", right: "1vw" }}>
                        Add review
                    </button>
                </div>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Review Form</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className='d-flex justify-content-evenly border border-dark p-3 rounded' id='review'>
                                        <input class="form-check-input" type="radio" name="Rate" id="exampleRadios1" onChange={onchange} value="5" />
                                        <label class="fa-solid fa-star fs-2" for="exampleRadios1">
                                        </label>
                                        <input class="form-check-input" type="radio" name="Rate" id="exampleRadios2" onChange={onchange} value="4" />
                                        <label class="fa-solid fa-star fs-2" for="exampleRadios2">
                                        </label>
                                        <input class="form-check-input" type="radio" name="Rate" id="exampleRadios3" onChange={onchange} value="3" />
                                        <label class="fa-solid fa-star fs-2" for="exampleRadios3">
                                        </label>
                                        <input class="form-check-input" type="radio" name="Rate" id="exampleRadios4" onChange={onchange} value="2" />
                                        <label class="fa-solid fa-star fs-2" for="exampleRadios4">
                                        </label>
                                        <input class="form-check-input" type="radio" name="Rate" id="exampleRadios5" onChange={onchange} value="1" />
                                        <label class="fa-solid fa-star fs-2" for="exampleRadios5">
                                        </label>
                                    </div>
                                    <div id="titlehelp" className="form-text  mb-2">please Rate us.</div>

                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput" name='Name' onChange={onchange} placeholder="name@example.com" />
                                        <label for="floatingInput">Enter your name</label>
                                        <div id="titlehelp" className="form-text">please enter some details .</div>
                                    </div>

                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a comment here" name='comments' onChange={onchange} id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                        <label for="floatingTextarea2">Enter your Comments</label>
                                        <div id="titlehelp" className="form-text">please enter some .</div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleclick}>submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ padding: "20px 0" }}>
                {wedth && (<div className="container">
                    <OwlCarousel className='hash-list owl-theme justify-evenly' items={`3`} autoPlay="true" autoplayTimeout="100" loop margin={0}>
                        {(allreview.map((note) => {
                            let text = note.Name;
                            let letter = text.charAt(0).toLowerCase();
                            let A5=false
                            let A4=false
                            let A3=false
                            let A2=false
                            let A1=false
                            let Rate=note.Rate
                            if(Rate==="1"){
                                A1=true
                            }
                            else if(Rate==="2"){
                                A2=true
                            }
                            else if(Rate==="3"){
                                A3=true
                            }
                            else if(Rate==="4"){
                                A4=true
                            }
                            else{
                                A5=true
                            }
                            return (
                                <>
                                    <div className={"card shadow-lg p-3 mb-5 ms-0 bg-body rounded"} style={{ width: "18rem", height: "22rem", overflow: "hidden" }}>
                                        <div className='m-4'><i className={`fa-solid fs-1 p-3 fa-${letter} border d-inline rounded-circle`}></i></div>
                                       <form> 
                                    <div className='d-flex justify-content-evenly' id='review1'>
                                        <input class="form-check-input" type="radio" name="Rate" id="exampleRadios1"  checked={A5}  value="5" disabled/>
                                        <label class="fa-solid fa-star fs-2" for="exampleRadios1">
                                        </label>
                                        <input class="form-check-input" type="radio" name="Rate" id="exampleRadios2" checked={A4} value="4"  disabled/>
                                        <label class="fa-solid fa-star fs-2" for="exampleRadios2">
                                        </label>
                                        <input class="form-check-input" type="radio" name="Rate" id="exampleRadios3"   checked={A3} value="3" disabled />
                                        <label class="fa-solid fa-star fs-2" for="exampleRadios3">
                                        </label>
                                        <input class="form-check-input" type="radio" name="Rate" id="exampleRadios4"  checked={A2} value="2" disabled />
                                        <label class="fa-solid fa-star fs-2" for="exampleRadios4">
                                        </label>
                                        <input class="form-check-input" type="radio" name="Rate" id="exampleRadios5"  checked={A1} value="1" disabled />
                                        <label class="fa-solid fa-star fs-2" for="exampleRadios5">
                                        </label>
                                    </div>
                                    </form>
                                        <div className="card-body">
                                            <h5 className="card-title">{note.Name}</h5>
                                            <p className="card-text">{note.Comments}</p>

                                        </div>
                                    </div>
                                </>
                            );
                        }
                        ))}
                        <div className="card shadow-lg p-3 mb-5 bg-body rounded" style={{ width: "18rem", height: "22rem", overflow: "hidden" }}>
                            <div className='m-4'><i className="fa-solid fs-1 p-3 fa-m border d-inline rounded-circle"></i></div>
                            <div className="card-body">
                                <h5 className="card-title">Manish Singh</h5>
                                <p className="card-text">Responding to a negative review can increase that rating by an average of +0.7. Respond to reviews in Play Console using suggested replies, or integrate with your own tools.</p>

                            </div>
                        </div>
                        <div className="card shadow-lg p-3 mb-5 bg-body rounded" style={{ width: "18rem", height: "22rem", overflow: "hidden" }}>
                            <div className='m-4'><i className="fa-solid fs-1 p-3 fa-m border d-inline rounded-circle"></i></div>
                            <div className="card-body">
                                <h5 className="card-title">Manish Singh</h5>
                                <p className="card-text">Discover the main issues that users mention in your reviews, see how these themes trend over time, and learn how you compare to similar apps</p>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>)}
                {!wedth && (<div className="container">
                    <OwlCarousel className='hash-list owl-theme justify-evenly' items={`1`} autoPlay="true" autoplayTimeout="100" loop margin={0}>
                        {(allreview.map((note) => {
                            let text = note.Name;
                            let letter = text.charAt(0).toLowerCase();
                            
                            return (
                                <>
                                    <div className={"card shadow-lg p-3 ms-5 bg-body rounded"} style={{ width: "18rem", height: "22rem", overflow: "hidden" }}>
                                        <div className='m-4'><i className={`fa-solid fs-1 p-3 fa-${letter} border d-inline rounded-circle`}></i></div>
                                        <div className="card-body">
                                            <h5 className="card-title">{note.Name}</h5>
                                            <p className="card-text">{note.Comments}</p>

                                        </div>
                                    </div>
                                </>
                            );
                        }
                        ))}
                        <div className="card shadow-lg p-3 ms-5 bg-body rounded" style={{ width: "18rem", height: "22rem", overflow: "hidden" }}>
                            <div className='m-4'><i className="fa-solid fs-1 p-3 fa-m border d-inline rounded-circle"></i></div>
                            <div className="card-body">
                                <h5 className="card-title">Manish Singh</h5>
                                <p className="card-text">Responding to a negative review can increase that rating by an average of +0.7. Respond to reviews in Play Console using suggested replies, or integrate with your own tools.</p>

                            </div>
                        </div>
                        <div className="card shadow-lg p-3 ms-5 bg-body rounded" style={{ width: "18rem", height: "22rem", overflow: "hidden" }}>
                            <div className='m-4'><i className="fa-solid fs-1 p-3 fa-m border d-inline rounded-circle"></i></div>
                            <div className="card-body">
                                <h5 className="card-title">Manish Singh</h5>
                                <p className="card-text">Discover the main issues that users mention in your reviews, see how these themes trend over time, and learn how you compare to similar apps</p>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>)}
            </section>
        </>
    )
}

export default Secreview