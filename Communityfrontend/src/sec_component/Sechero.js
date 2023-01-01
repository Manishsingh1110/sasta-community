import React from 'react'
import {
  Link
} from "react-router-dom";
function Sechero() {
  return (
    <section id="hero" className="hero d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-xl-4">
          <h2 data-aos="fade-up">Focus On What Matters</h2>
          <blockquote data-aos="fade-up" data-aos-delay="100">
            <p>Come let's join our hands. and let our minds to work  for others...To help them by providing our precious suggestions and knowledge</p>
          </blockquote>
          <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
            <Link to="/about/" className="btn-get-started">Get Started</Link>
          </div>

        </div>
      </div>
    </div>
  </section>
  )
}

export default Sechero