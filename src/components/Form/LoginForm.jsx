import React from 'react'

const LoginForm = (props) => {
  return (
    <div>
        <div className={`popup-tab-content ${props?.className}`}>
				
				<div className="welcome-text">
					<h3>We're glad to see you again!</h3>
					<span>Don't have an account? <a href="#" className="register-tab">Sign Up!</a></span>
				</div>
					
				<form method="post" >

					<div className="input-with-icon-left">
						<i className="icon-material-baseline-mail-outline"></i>
						<input type="text" className="input-text with-border" name="emailaddress" id="emailaddress" placeholder="Email Address" required/>
					</div>
					{/* <div className="input-with-icon-left">
						<i className="icon-material-baseline-mail-outline"></i>
						<input type="text" className="input-text with-border" name="Login_id" id="" placeholder="Login ID" required/>
					</div> */}
					<div className="input-with-icon-left">
						<i className="icon-material-outline-lock"></i>
						<input type="password" className="input-text with-border" name="password" id="password" placeholder="Password" required/>
					</div>
					<a href="#" className="forgot-password">Forgot Password?</a>
				</form>
				
				<button className="button full-width button-sliding-icon ripple-effect" type="submit" form="login-form">Log In <i className="icon-material-outline-arrow-right-alt"></i></button>
				
				<div className="social-login-separator"><span>or</span></div>
				<div className="social-login-buttons">
					<button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f"></i> Log In via Facebook</button>
					<button className="google-login ripple-effect"><i className="icon-brand-google-plus-g"></i> Log In via Google+</button>
				</div>

			</div>
    </div>
  )
}

export default LoginForm