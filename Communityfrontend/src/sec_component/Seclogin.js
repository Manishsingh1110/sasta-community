import React, { useState } from 'react'
import {useNavigate} from 'react-router'

import {
	Link
  } from "react-router-dom";
function Seclogin() {
	var history =useNavigate();
	const [logindetail, setlogindetail] = useState({ email: "", password: ""})
	  const handleclick = (e) => {
		  e.preventDefault();
		  login(logindetail.email, logindetail.password)
	  }
	const onchange = (e) => {
		setlogindetail({ ...logindetail, [e.target.name]: e.target.value })
	}
	const login = async (email,password) => {
	  // Default options are marked with *
	  console.log(email)
	  const response = await fetch('https://sastacommunity.herokuapp.com/app/login/', {
		  method: "POST",
		  headers: {
			  "Content-type": "application/json;charset=UTF-8",
		  },
		  // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		  body: JSON.stringify({email,password}) // body data type must match "Content-Type" header
	  });
	  const  json5 = await response.json()
	  // console.log(json5)
	  if(json5.success){
		  localStorage.setItem("token",json5.jwttoken);
		  history("/user")
	  }else{
		  alert("invalid")
	  }
  }
    return (
		<div id='signin'>
        <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login">
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" name='email' onChange={onchange} placeholder="User name / Email"/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" name='password'autoComplete='' onChange={onchange} placeholder="Password"/>
				</div>
				<button className="button login__submit" onClick={handleclick}>
					<span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div className="social-login">
				<h3>log in via</h3>
				<div className="social-icons">
					<Link to="/login" className="social-login__icon fab fa-instagram"></Link>
					<Link to="/login" className="social-login__icon fab fa-facebook"></Link>
					<Link to="/login" className="social-login__icon fab fa-twitter"></Link>
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
</div>
    )
}

export default Seclogin