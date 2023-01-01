import React from 'react'
import {
    Link,
    useLocation
} from "react-router-dom";
function Secfooter() {
    var location = useLocation();
    return (
        <footer id="footer" className="footer">
            <div className="footer-content">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="index.html" className="logo d-flex align-items-center">
                                <span>Sasta Community</span>
                            </a>
                            <p>The place where each and every opinion matters and where everyone is welcomed to share there ideas and suggestions</p>
                            <div className="social-links d-flex  mt-3">
                                <a href="#" className="twitter"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#" className="facebook"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#" className="instagram"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#" className="linkedin"><i className="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li ><i className="fa-solid fa-minus"></i>
                                    <Link to="/user">Home</Link>
                                </li>
                                <li ><i className="fa-solid fa-minus"></i>
                                    <Link to="/user/about">About</Link>
                                </li>
                                <li ><i className="fa-solid fa-minus"></i>
                                    <Link to="/user/services">Services</Link>
                                </li>
                                <li ><i className="fa-solid fa-minus"></i>
                                    <Link to="/user/team">Team</Link>
                                </li>
                                <li ><i className="fa-solid fa-minus"></i>
                                    <Link to="/user/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="fa-solid fa-minus"></i> <a href="#">Add doubts and Suggestions</a></li>
                                <li><i className="fa-solid fa-minus"></i> <a href="#">Remainders</a></li>
                                <li><i className="fa-solid fa-minus"></i> <a href="#">Notes</a></li>
                                <li><i className="fa-solid fa-minus"></i> <a href="#">Meetings</a></li>
                                <li><i className="fa-solid fa-minus"></i> <a href="#">Chats</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>
                                A108 <br />
                                mumbai, Maharashtra 535022<br />
                                India <br /><br />
                                <strong>Phone:</strong> +91 55895548855<br />
                                <strong>Email:</strong> info@example.com<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-legal">
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Sasta Community</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a className='text-dark fs-6' href="https://manishsingh1110.github.io/Resume/"><strong>Manish Singh</strong></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Secfooter