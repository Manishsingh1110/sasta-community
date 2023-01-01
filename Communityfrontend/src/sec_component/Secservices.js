import React from 'react'

function Secservices() {
  return (
    <main id="main">
    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('../assets/img/services-header.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center">

        <h2>Services</h2>
        <ol>
          <li><a href="index.html">Home</a></li>
          <li>Services</li>
        </ol>

      </div>
    </div>
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
    <section id="services-cards" className="services-cards">
      <div className="container" data-aos="fade-up">

        <div className="row gy-4">

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="card-item">
              <div className="row">
                <div className="col-xl-5">
                  <div className="card-bg" style={{backgroundImage: "url(../assets/img/cards-1.jpg)"}}></div>
                </div>
                <div className="col-xl-7 d-flex align-items-center">
                  <div className="card-body">
                    <h4 className="card-title">Express your ideas.</h4>
                    <p>Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="card-item">
              <div className="row">
                <div className="col-xl-5">
                  <div className="card-bg" style={{backgroundImage: "url(../assets/img/cards-2.jpg)"}}></div>
                </div>
                <div className="col-xl-7 d-flex align-items-center">
                  <div className="card-body">
                    <h4 className="card-title">Help others by your precious suggestions</h4>
                    <p>Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div className="card-item">
              <div className="row">
                <div className="col-xl-5">
                  <div className="card-bg" style={{backgroundImage: "url(../assets/img/cards-3.jpg)"}}></div>
                </div>
                <div className="col-xl-7 d-flex align-items-center">
                  <div className="card-body">
                    <h4 className="card-title">Share your knowledge</h4>
                    <p>Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto officia laboriosam odit. Ut sunt temporibus nulla culpa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div className="card-item">
              <div className="row">
                <div className="col-xl-5">
                  <div className="card-bg" style={{backgroundImage: "url(../assets/img/cards-4.jpg)"}}></div>
                </div>
                <div className="col-xl-7 d-flex align-items-center">
                  <div className="card-body">
                    <h4 className="card-title">Let's club thousands of mind together and find new routes</h4>
                    <p>Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. Eum eos doloremque architecto illo at beatae dolore. Fugiat suscipit et sint ratione dolores. Aut aliquid ea dolores libero nobis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  </main>
  )
}

export default Secservices