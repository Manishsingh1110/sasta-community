import React from 'react'

function Secteam() {
  return (
    <main id="main">
    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('../assets/img/team-header.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center">

        <h2>Team</h2>
        <ol>
          <li><a href="index.html">Home</a></li>
          <li>Team</li>
        </ol>

      </div>
    </div>
    <section id="team" className="team">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Our Team</h2>
                    </div>
                    <div className="row gy-4">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="team-member p-5 ">
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

  </main>
  )
}

export default Secteam