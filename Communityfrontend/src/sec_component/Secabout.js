import React from 'react'
import Wiper from './Wiper'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Secabout() {
    return (
        <main id="main">
            <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('../assets/img/about-header.jpg')" }}>
                <div className="container position-relative d-flex flex-column align-items-center">

                    <h2>About</h2>
                    <ol>
                        <li><a href="index.html">Home</a></li>
                        <li>About</li>
                    </ol>

                </div>
            </div>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="row gy-4" data-aos="fade-up">
                        <div className="col-lg-4">
                            <img src="../assets/img/about.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8">
                            <div className="content ps-lg-5">
                                <h3>A plan of thousands of minds</h3>
                                <p>
                                    These is a place where every thaught,suggestions and idea matters.everyone is welcome to express there thaughts and suggestions
                                </p>
                                <ul>
                                    <li><i class="fa-solid fa-circle-check"></i> Put forward your doubts.</li>
                                    <li><i class="fa-solid fa-circle-check"></i> Feal free to give your suggestions.</li>
                                    <li><i class="fa-solid fa-circle-check"></i> please share your knowledge and let others to inculcate it.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section id="why-us" className="why-us">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Why Choose Us</h2>
                    </div>
                    <div className="row g-0" data-aos="fade-up" data-aos-delay="200">
                        <div className="col-xl-5 img-bg" style={{ backgroundImage: "url('../assets/img/why-us-bg.jpg')" }}></div>
                        <div className="col-xl-7 slides  position-relative">
                            <Wiper />
                        </div>
                    </div>
                </div>
            </section>
            <section id="call-to-action" className="call-to-action">
                <div className="container" data-aos="fade-up">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h3>let's communicate for free</h3>
                            <p>Start your personal as well as formal Meetings free of cost.lets interact,upgradeand develop our race with each and every opinion.</p>
                            <a className="cta-btn" href="#">Let's start</a>
                        </div>
                    </div>

                </div>
            </section>
            <section id="team" className="team">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Our Team</h2>
                    </div>
                    <div className="row gy-4">
                        <div className="col-md-6 " data-aos="fade-up" data-aos-delay="100">
                            <div className="team-member p-3">
                                <div className="member-img">
                                    <img src="../assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href="/"><i className="fa-brands fa-twitter fs-4"></i></a>
                                        <a href="/"><i className="fa-brands fa-facebook fs-4"></i></a>
                                        <a href="/"><i className="fa-brands fa-instagram fs-4"></i></a>
                                        <a href="/"><i className="fa-brands fa-linkedin fs-4"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Manish Singh</h4>
                                    <span>Chief Executive Officer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default Secabout