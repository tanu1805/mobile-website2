import React from 'react'
import "./Login.css";

function Login() {
  return (
    <div className="Logincart">
         <h1>Login</h1>

         <div className="input-container">
          <label>Username </label>
          <input type="email" name="email" required />
        
        </div>

        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        
        </div>

        {/* <a href="#">Forgot password?</a>
        <a href="#">Create a new account</a> */}
        <div className="input-container">
        <button className="loginBut" type='submit'>
          <p>Login</p>
        </button>
        </div>

        {/* <button className="siG">
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt="Trees"
            height="30"
          />
          <p>Sign in with Google</p>
          
        </button> */}
      </div>
      



  )
}

export default Login