import React from 'react'
import Wiper from './Wiper'

import Secreview from './Secreview';
function Secmainitem() {
  
  return (
    <main id="main">

      {/* <!-- ======= Why Choose Us Section ======= --> */}
      <section id="why-us" className="why-us">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Why Choose Us</h2>
          </div>
          <div className="row g-0" data-aos="fade-up" data-aos-delay="200">
            <div className="col-xl-5 img-bg" style={{ backgroundImage: "url('assets/img/why-us-bg.jpg')" }}></div>
            <div className="col-xl-7 slides  position-relative">
              <Wiper />
            </div>
          </div>
        </div>
      </section>
      <section id="services-list" className="services-list">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <h2>Our Services</h2>
          </div>
          <div className="row gy-5">
            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
              <div className="icon flex-shrink-0"><i className="fa-solid fa-briefcase fs-4" style={{ color: "#f57813" }}></i></div>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Express yourself</a></h4>
                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <div className="icon flex-shrink-0"><i className="fa-solid fa-list fs-4 fs-4" style={{ color: "#15a04a" }}></i></div>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Personal Data</a></h4>
                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <div className="icon flex-shrink-0"><i className="fa-solid fa-bar-chart fs-4" style={{ color: "#d90769" }}></i></div>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Help others</a></h4>
                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <div className="icon flex-shrink-0"><i className="fa-solid fa-binoculars fs-4" style={{ color: "#15bfbc" }}></i></div>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Be The Eye</a></h4>
                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
              <div className="icon flex-shrink-0"><i className="fa-solid fa-sun fs-4" style={{ color: "#f5cf13" }}></i></div>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Chat with others</a></h4>
                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
              <div className="icon flex-shrink-0"><i className="fa-solid fa-calendar fs-4" style={{ color: "#1335f5" }}></i></div>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Online Meetings</a></h4>
                <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
              </div>
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
      <section id="features" className="features">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
              <h3>Powerful Features for <br />Your Business and Education</h3>

              <div className="row gy-4">

                <div className="col-md-6">
                  <div className="icon-list d-flex">
                    <i className="ri-store-line" style={{ color: "#ffbb2c" }}></i>
                    <span>Easy Cart Features</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="icon-list d-flex">
                    <i className="ri-bar-chart-box-line" style={{ color: "#5578ff" }}></i>
                    <span>Best platform to ask doubts</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="icon-list d-flex">
                    <i className="ri-calendar-todo-line" style={{ color: "#e80368" }}></i>
                    <span>Easy to keep remainders</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="icon-list d-flex">
                    <i className="ri-paint-brush-line" style={{ color: "#e361ff" }}></i>
                    <span>Make Notes which may help others </span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="icon-list d-flex">
                    <i className="ri-database-2-line" style={{ color: "#47aeff" }}></i>
                    <span>Easy communcation with users</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="icon-list d-flex">
                    <i className="ri-gradienter-line" style={{ color: "#ffa76e" }}></i>
                    <span>Start your Meetings</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="icon-list d-flex">
                    <i className="ri-file-list-3-line" style={{ color: "#11dbcf" }}></i>
                    <span>Explore the world</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="icon-list d-flex">
                    <i className="ri-base-station-line" style={{ color: "#ff5828" }}></i>
                    <span>The place where each opinion matters</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 position-relative" data-aos="fade-up" data-aos-delay="200">
              <div className="phone-wrap">
                <img src="assets/img/iphone.png" alt="Image" className="img-fluid" />
              </div>
            </div>
          </div>

        </div>

        <div className="details">
          <div className="container" data-aos="fade-up" data-aos-delay="300">
            <div className="row">
              <div className="col-md-6">
                <h4>Share   Evolve<br /> upgrade</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nostrum molestias doloremque quae delectus odit minima corrupti blanditiis quo animi!</p>
                <a href="#about" className="btn-get-started">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </section>
     <Secreview/>
    </main>
  )
}

export default Secmainitem