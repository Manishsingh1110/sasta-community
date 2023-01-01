import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router'
// import { Location } from 'react-router-dom';
function Landing() {
    var history = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            history("/user")
        }, 1500);
        return () => clearTimeout(timer);
      }, []);
    return (
        <div className="slider-area ">
            <div className="slider">
                <div className="container ">
                    <div className="position-relative" style={{position:"relative",top:"40vh"}}>
                        <div className="card-body ">
                            <figure className="col-md-9">
                                <figcaption className="blockquote-footer fs-5">
                                    Committed to success
                                </figcaption>
                            </figure>
                            <h5 className="card-title fs-1">We help to grow your business</h5>
                            <h6 className="card-subtitle mb-2 text-muted"></h6>
                            <p className="card-text">Mollit anim laborum.Dvcuis aute serunt  iruxvfg dhjkolohr indd re voluptate<br /> velit esscillumlore eu quife nrulla parihatur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing