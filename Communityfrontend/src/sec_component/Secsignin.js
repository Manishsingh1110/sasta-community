import React, { useState } from 'react'
import { useNavigate } from 'react-router'
function Secsignin() {
  var history = useNavigate();
  const [signindetail, setsignindetail] = useState({ username: "", email: "", Password: "", firstname: "", lastname: "", RePassword: "", Address: "", City: "", State: "", Zip: "" })
  const handleclick = (e) => {
    e.preventDefault();
    
      signin(signindetail.username, signindetail.email, signindetail.Password, signindetail.firstname, signindetail.lastname, signindetail.Address, signindetail.City, signindetail.State, signindetail.Zip)
 
  }
  const onchange = (e) => {
    setsignindetail({ ...signindetail, [e.target.name]: e.target.value })
  }
  const signin = async (username, email, Password, firstname, lastname, Address, City, State, Zip) => {
    // Default options are marked with *
    const response = await fetch('https://sastacommunity.herokuapp.com/app/signup', {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ username, email, Password, firstname, lastname, Address, City, State, Zip})
    });
    const json = await response.json()
    if (json.success) {
      history("/login")
    } else {
      alert("invalid")
    }
  }
  return (
    <section className="vh-100" id='signin' >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-none d-md-block" style={{ height: "100vh" }}>
            <img src="../assets/img/signin.webp"
              alt="login form" className="img-fluid" style={{ Radius: "1rem 0 0 1rem" }} />
          </div>
          <div className="col-lg-8" style={{ height: "100vh" }} >
            <div className="p-4 text-black">
              <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>
              <form>
                <div className='row'>
                  <div className="col-md-6 form-floating mb-2">
                    <input type="text" className="form-control" required name='firstname' onChange={onchange} placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "60px" }} aria-describedby="titlehelp" />
                    <label htmlFor="floatingTextarea">Enter Firstname</label>
                  </div>
                  <div className="col-md-6 form-floating mb-2">
                    <input type="text" className="form-control" required name='lastname' onChange={onchange} placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "60px" }} aria-describedby="titlehelp" />
                    <label htmlFor="floatingTextarea">Enter Lastname</label>
                  </div>

                  <div className="form-floating mb-2">
                    <input type="text" className="form-control" required name='username' onChange={onchange} placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "60px" }} aria-describedby="titlehelp" />
                    <label htmlFor="floatingTextarea">Enter Username</label>
                  </div>
                  <div className="form-floating mb-2">
                    <input type="email" className="form-control" required name='email' onChange={onchange} placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "60px" }} aria-describedby="titlehelp" />
                    <label htmlFor="floatingTextarea">Enter Email address</label>
                  </div>
                  <div className="col-md-6 form-floating mb-2">
                    <input type="Password" className="form-control" required name='Password' onChange={onchange} placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "60px" }} aria-describedby="titlehelp" />
                    <label htmlFor="floatingTextarea">Enter Password</label>
                  </div>
                  <div className="col-md-6 form-floating mb-2">
                    <input type="Password" className="form-control" required name='RePassword' onChange={onchange} placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "60px" }} aria-describedby="titlehelp" />
                    <label htmlFor="floatingTextarea">Enter Password again</label>
                  </div>
                  <div className="form-floating mb-2">
                    <input type="text" className="form-control" required name='Address' onChange={onchange} placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "60px" }} aria-describedby="titlehelp" />
                    <label htmlFor="floatingTextarea">Enter Address</label>
                  </div>
                  <div className="col-md-6 form-floating mb-2">
                    <input type="text" className="form-control" required name='City' onChange={onchange} placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "60px" }} aria-describedby="titlehelp" />
                    <label htmlFor="floatingTextarea">Enter City</label>
                  </div>
                  <div className="col-md-4 form-floating mb-2">
                    <input type="text" className="form-control" required name='State' onChange={onchange} placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "60px" }} aria-describedby="titlehelp" />
                    <label htmlFor="floatingTextarea">Enter State </label>
                  </div>
                  <div className="col-md-2 form-floating mb-2">
                    <input type="text" className="form-control" required name='Zip' onChange={onchange} placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "60px" }} aria-describedby="titlehelp" />
                    <label htmlFor="floatingTextarea">Enter Zip</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" onClick={handleclick} type="button">Signin</button>
                  </div>
                  <a href="#!" className="small text-muted">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
<form class="row g-3">

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
export default Secsignin