import React from 'react'

const RegistartionForm = (props) => {
  return (
    <div>
         <div className={`popup-tab-content ${props?.className}`}>
				
				<div className="welcome-text">
					<h3>Let's create your account!</h3>
				</div>

				<div className="account-type">
					<div>
						<input type="radio" name="account-type-radio" id="freelancer-radio" className="account-type-radio" onclick="isSelected()" checked/>
						<label for="freelancer-radio" className="ripple-effect-dark"><i className="icon-material-outline-account-circle"></i> Artist</label>
					</div>
						
					<div>
						<input type="radio" name="account-type-radio" id="employer-radio" className="account-type-radio" onclick="isSelected()" />
						<label for="employer-radio" className="ripple-effect-dark"><i className="icon-material-outline-business-center"></i> Hirer</label>
					</div>
				</div>
					
				<form method="post" id="register-account-form" >
					<div>
						<input type="text" className="input-text with-border block" name="Name" id="name" placeholder="Name" required />
					</div>
					<div>
						<select name="city" className='block' >
							<option value="Ahmedabad">Ahmedabad</option>
							<option value="Surat">Surat</option>
							<option value="Rajkot">Rajkot</option>
							<option value="Jamnagar">Jamnagar</option>
							<option value="Vadodara">Vadodara</option>
						</select>   
					</div>
					<div>
						<input type="text" className="input-text with-border block" name="exp_year" id="ExperienceYear" placeholder="Experience Year" required  />
					</div>
					<div>
						<select name="Exp_Level" id="Exp_Level" className="block">
							<option value="Bigner">Beginner</option>
							<option value="Intermediate">Intermediate</option>
							<option value="Expert">Expert</option>
						</select>
					</div>
					<div>
						<select name="art_categort" id="art_categort" className='block' >
							<option value="Dance">Dance</option>
							<option value="Music">Music</option>
							<option value="singer">Singer</option>
						</select>
					</div>
					<div>
						<select name="art_Subcategory" id="art_Subcategory" className="block">
							<option value="Freestyle">Freestyle</option>
							<option value="Drumer">Drumer</option>
							<option value="Pop">Pop Singer</option>
						</select>
					</div>
					<div> 
						<textarea className="input-text with-border block" name="Description" id="Description" placeholder="Description" required ></textarea> 
					</div>
					<div>
						<input type="text" className="input-text with-border block" name="contact" id="contact" placeholder="Contact" required />
					</div>
					<div>
						<input type="file" name="photo" id="photo" style={{height: "54px",display: "block", padding: "0px"}} />
					</div>

					<div className="input-with-icon-left">
						<i className="icon-material-baseline-mail-outline"></i>
						<input type="text" className="input-text with-border" name="emailaddress-register" id="emailaddress-register" placeholder="Email Address" required  style={{display:"block"}}/>
					</div>

					<div className="input-with-icon-left" title="Should be at least 8 characters long" data-tippy-placement="bottom">
						<i className="icon-material-outline-lock"></i>
						<input type="password" className="input-text with-border" name="password-register" id="password-register" placeholder="Password" required style={{display:"block"}}/>
					</div>

					<div className="input-with-icon-left">
						<i className="icon-material-outline-lock"></i>
						<input type="password" className="input-text with-border" name="password-repeat-register" id="password-repeat-register" placeholder="Repeat Password" required  style={{display:"block"}}/>
					</div>
				</form>
						
				<button className="margin-top-10 button full-width button-sliding-icon ripple-effect" type="submit" name="btnInsert" form="register-account-form">Register <i className="icon-material-outline-arrow-right-alt"></i></button>
				
				
				<div className="social-login-separator"><span>or</span></div>
				<div className="social-login-buttons">
					<button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f"></i> Register via Facebook</button>
					<button className="google-login ripple-effect"><i className="icon-brand-google-plus-g"></i> Register via Google+</button>
				</div>

			</div>
    </div>
  )
}

export default RegistartionForm