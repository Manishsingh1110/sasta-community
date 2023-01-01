import React from 'react'

function Seccontact() {
  return (
    <main id="main">
    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('../assets/img/contact-header.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center">

        <h2>Contact</h2>
        <ol>
          <li><a href="index.html">Home</a></li>
          <li>Contact</li>
        </ol>

      </div>
    </div>
    <section id="contact" className="contact">
      <div className="container position-relative" data-aos="fade-up">

        <div className="row gy-4 d-flex justify-content-end">

          <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">

            <div className="info-item d-flex">
            <i class="fa-solid fa-earth-asia"></i>
              <div>
                <h4>Location:</h4>
                <p>A108
mumbai, Maharashtra 535022
India</p>
              </div>
            </div>

            <div className="info-item d-flex">
            <i class="fa-solid fa-envelope"></i>
              <div>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>
            </div>

            <div className="info-item d-flex">
            <i class="fa-solid fa-mobile"></i>
              <div>
                <h4>Call:</h4>
                <p>+91 55895548855</p>
              </div>
            </div>

          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
            <form  className="email-form">
              <div className="row">
                <div className="col-md-6 p-2 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 p-2 form-group ">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3 p-2">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3 p-2">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>

  </main>
  )
}

export default Seccontact