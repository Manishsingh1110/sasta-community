import React, { useEffect, useContext } from 'react'
import widthcontext from '../context/widthcontext'
import { useNavigate } from 'react-router'
import Notecontext from '../context/Notecontext';
import {
  Link,
  useLocation
} from "react-router-dom";
function Secnavbar(props) {
  var context = useContext(Notecontext);
  var { getloggeduser, loggeduser } = context
  useEffect(() => {
    getloggeduser()
  }, [])
  var history = useNavigate();
  var ham = props.ham;
  var location = useLocation();
  // var now=Date(Date.now())
  var { wedth } = useContext(widthcontext);
  const handleclick = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    history("/user")
  }
  return (
    <>

      <div className={wedth ? "container mt-2 ps-5 pe-5" : "container-fluid p-3 "}>
        <Link className={wedth ? "navbar-brand " : "navbar-brand"} to="/about/">Sasta Community</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Sasta Community</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item m-2">
                {!wedth && (
                  <div className="col-md-3">
                    <figcaption className="text-secondary fs-2 ps-4 col-md-4 d-inline">
                      Hii {loggeduser.username}
                      {ham && (!localStorage.getItem('token') ? <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item ms-2">
                          <Link className="nav-link" to="/login"><button type="button" className="btn btn-outline-secondary">Login</button></Link>
                        </li>
                        <li className="nav-item ms-2">
                          <Link className="nav-link" to="/signin"><button type="button" className="btn btn-outline-secondary">Signin</button></Link>
                        </li></ul> : <ul className="navbar-nav justify-content-end flex-grow-1 pe-3"><li className="nav-item ms-4">
                          <Link className="nav-link" to="/login"><button type="button" className="btn btn-outline-secondary d-inline" onClick={handleclick}>Logout</button></Link>
                        </li></ul>)
                      }
                    </figcaption>
                  </div>
                )}
              </li>
              <li className="nav-item m-2">
                <Link className={`nav-link ${location.pathname === "/user" ? "active" : ""}`} aria-current="page" to="/user">Home</Link>
              </li>
              <li className="nav-item m-2">
                <Link className={`nav-link ${location.pathname === "/user/about" ? "active" : ""}`} to="/user/about">About</Link>
              </li>
              <li className="nav-item m-2">
                <Link className={`nav-link ${location.pathname === "/user/services" ? "active" : ""}`} aria-current="page" to="/user/services">Services</Link>
              </li>
              <li className="nav-item m-2">
                <Link className={`nav-link ${location.pathname === "/user/team" ? "active" : ""}`} aria-current="page" to="/user/team">Team</Link>
              </li>
              <li className="nav-item m-2">
                <Link className={`nav-link ${location.pathname === "/user/contact" ? "active" : ""}`} to="/user/contact">Contact</Link>
              </li>
              {!ham && (!localStorage.getItem('token') ? <>
                <li className="nav-item ms-2">
                  <Link className="nav-link" to="/login"><button type="button" className="btn btn-outline-secondary">Login</button></Link>
                </li>
                <li className="nav-item ms-2">
                  <Link className="nav-link" to="/signin"><button type="button" className="btn btn-outline-secondary">Signin</button></Link>
                </li></> : <li className="nav-item ms-4">
                <Link className="nav-link" to="/login"><button type="button" className="btn btn-outline-secondary" onClick={handleclick}>Logout</button></Link>
              </li>)}
            </ul>
            <form className={wedth ? `d-none` : "d-flex"} role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Secnavbar