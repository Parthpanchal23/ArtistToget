import React from 'react'
import { useForm } from 'react-hook-form';
import {useHttpClient} from "../../lib/http-hook";
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
	const {register,handleSubmit,reset,formState:{errors}} =useForm();
	
	const {isloading,error,sendRequest,clearError}=useHttpClient();

	const onSubmit =async (data)=>{
			
		const responseData =await sendRequest(process.env.REACT_APP_BACKEND_URL+"api/v1/user/login",
			"POST",
			JSON.stringify(data),
			{
				'Content-Type':'application/json'
			},
		)

		if(responseData?.isLogin) {
			reset()
			alert(responseData?.message);
		}
	}

  return (
    <div>
        <div className={`popup-tab-content ${props?.className}`}>
				<div className="welcome-text">
					<h3>We're glad to see you again!</h3>
					<span>Don't have an account? <Link to="/signup" className="register-tab">Sign Up!</Link></span>
				</div>
					
				<form  onSubmit={handleSubmit(onSubmit)}>

					<div className="input-with-icon-left">
						<i className="icon-material-baseline-mail-outline"></i>
						<input type="text" className="input-text with-border" name="email" id="emailaddress" placeholder="Email Address" 
						{...register('email',{required:true})}
						/>
						{errors.email && <span className ="text-red-600 ">This field is required</span>}
					</div>
					
					<div className="input-with-icon-left">
						<i className="icon-material-outline-lock"></i>
						<input type="password" className="input-text with-border" name="password" id="password" placeholder="Password" {...register('password',{required:true})} />
						{errors.passwword && <span className ="text-red-600 ">This field is required</span>}
					</div>
					<a href="#" className="forgot-password">Forgot Password?</a>
				<input type="submit" name="Login" value='Login' className="button full-width button-sliding-icon ripple-effect" />
				</form>

				{/* <button className="button full-width button-sliding-icon ripple-effect" type="submit" form="login-form">Log In <i className="icon-material-outline-arrow-right-alt"></i></button> */}
				
				
				{/* <div className="social-login-separator"><span>or</span></div>
				<div className="social-login-buttons">
					<button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f"></i> Log In via Facebook</button>
					<button className="google-login ripple-effect"><i className="icon-brand-google-plus-g"></i> Log In via Google+</button>
				</div> */}

			</div>
    </div>
  )
}

export default LoginForm