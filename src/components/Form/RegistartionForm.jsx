import React from 'react'
import { useForm } from "react-hook-form"
import { useHttpClient } from '../../lib/http-hook';
import ImageUpload from '../Ui/ImageUpload';

const RegistartionForm = (props) => {
	const {register,watch,handleSubmit,formState:{errors,isDirty, isValid},setValue} =useForm();
	const selectOption =watch('userType');
	const {isloading,error,sendRequest,clearError}=useHttpClient();
	const onSubmit =async (data)=>{
			const formdata =new FormData();
			formdata?.append('Exp_Level',data?.Exp_Level);
			formdata?.append('art_Subcategory',data?.art_Subcategory);
			formdata?.append('art_category',data?.art_category);
			formdata?.append('city',data?.city);
			formdata?.append('description',data?.description);
			formdata?.append('email',data?.email);
			formdata?.append('exp_year',data?.exp_year);
			formdata?.append('image',data?.image);
			formdata?.append('name',data?.name);
			formdata?.append('password',data?.password);
			formdata?.append('phone',data?.phone);
			formdata?.append('userType',data?.userType);

			const responseData =await sendRequest('http://localhost:5000/api/v1/user/signup',
				"POST",
				formdata,
			)
			if(responseData?.status === 'created sucessfully')
			{
				alert(responseData?.status);
			}
		
	}
  return (
    <div>
         <div className={`popup-tab-content ${props?.className}`}>
				
				<div className="welcome-text">
					<h3>Let's create your account!</h3>
				</div>
				<form  id="register-account-form" onSubmit={handleSubmit(onSubmit)} >
				<div className="account-type">
					<div>
						<input type="radio" name="account-type-radio"  value="ARTIST" id="freelancer-radio" className="account-type-radio" {...register('userType',{required:true})} />
						<label for="freelancer-radio" className="ripple-effect-dark"><i className="icon-material-outline-account-circle" ></i> Artist</label>
					{errors.userType && <span className ="text-red-600 ">This field is required</span>}
					</div>
						
					<div>
						<input type="radio" name="account-type-radio" value="HIRER" id="employer-radio" className="account-type-radio" 
						{...register('userType',{required:true})}  />
						<label for="employer-radio" className="ripple-effect-dark"><i className="icon-material-outline-business-center"></i> Hirer</label>
					</div>
				</div>
				<div>
					<ImageUpload name="photo" id="photo" {...register('image',{required:true}	)} onChange={(pros)=>{
						console.log("d",pros);
						setValue('image',pros);
					}}/>
						{/* <input type="file" name="photo" id="photo" style={{height: "54px",display: "block", padding: "0px"}} {...register('image',{required:true})} /> */}
						{errors.image && <span className ="text-red-600 ">This field is required</span>}
					</div>
				
					<div>
						<input type="text" className="input-text with-border block" name="Name" id="name" placeholder="Name"  {...register('name')} />
						{errors.name && <span className ="text-red-600 ">This field is required</span>}	
					</div>
					{selectOption === 'ARTIST' && (
					<div>
						<select name="city" className='block'  {...register('city')}>
							<option value="Ahmedabad">Ahmedabad</option>
							<option value="Surat">Surat</option>
							<option value="Rajkot">Rajkot</option>
							<option value="Jamnagar">Jamnagar</option>
							<option value="Vadodara">Vadodara</option>
						</select>   
						{errors.city && <span className ="text-red-600 ">This field is required</span>}	
					</div>)}
					{selectOption === 'ARTIST' && (
					<div>
						<input type="text" className="input-text with-border block" name="exp_year" id="ExperienceYear" placeholder="Experience Year"  {...register('exp_year')} />
						{errors.exp_year && <span className ="text-red-600 ">This field is required</span>}
					</div>)}
					{selectOption === 'ARTIST' && (
					<div>
						<select name="Exp_Level" id="Exp_Level" className="block" {...register('Exp_Level')}>
							<option value="Bigner">Beginner</option>
							<option value="Intermediate">Intermediate</option>
							<option value="Expert">Expert</option>
						</select>
						{errors.Exp_Level && <span className ="text-red-600 ">This field is required</span>}
					</div>)}
					{selectOption === 'ARTIST' && (
					<div>
						<select name="art_categort" id="art_categort" className='block' {...register('art_category')} >
							<option value="Dance">Dance</option>
							<option value="Music">Music</option>
							<option value="singer">Singer</option>
						</select>
						{errors.art_category && <span className ="text-red-600 ">This field is required</span>}
					</div>)}
					{selectOption === 'ARTIST' && (
					<div>
						<select name="art_Subcategory" id="art_Subcategory" className="block" {...register('art_Subcategory')}>
							<option value="Freestyle">Freestyle</option>
							<option value="Drumer">Drumer</option>
							<option value="Pop">Pop Singer</option>
						</select>
						{errors.art_SubCategory && <span className ="text-red-600 ">This field is required</span>}
					</div>)}
					{selectOption === 'ARTIST' && (
					<div> 
						<textarea className="input-text with-border block" name="Description" id="Description" placeholder="Description"  {...register('description')} ></textarea> 
						{errors.description && <span className ="text-red-600 ">This field is required</span>}
					</div>)}
					<div>
						<input type="text" className="input-text with-border block" name="phone" id="phone" placeholder="Contact"  {...register('phone',{required:true})} />
						{errors.phone && <span className ="text-red-600 " >This field is required</span>}
					</div>
					

					<div className="input-with-icon-left">
						<i className="icon-material-baseline-mail-outline"></i>
						<input type="text" className="input-text with-border" name="emailaddress-register" id="emailaddress-register" placeholder="Email Address"   style={{display:"block"}} {...register('email',{required:true})}/>
						{errors.email && <span className ="text-red-600 ">This field is required</span>}
					</div>

					<div className="input-with-icon-left" title="Should be at least 8 characters long" data-tippy-placement="bottom">
						<i className="icon-material-outline-lock"></i>
						<input type="password" className="input-text with-border" name="password-register" id="password-register" placeholder="Password"  style={{display:"block"}} {...register('password',{required:true})}/>
						{errors.password && <span className ="text-red-600 ">This field is required</span>}
					</div>

					<div className="input-with-icon-left">
						<i className="icon-material-outline-lock"></i>
						<input type="password" className="input-text with-border" name="password-repeat-register" id="password-repeat-register" placeholder="Repeat Password"   style={{display:"block"}} {...register('confirmpassword',{required:true})}/>
						{errors.confirmpassword && <span className ="text-red-600 ">This field is required</span>}
					</div>
				</form>
						
				<button 
				className="margin-top-10 button full-width button-sliding-icon ripple-effect" 
				// disabled={!isDirty || !isValid}
				type="submit" 
				name="btnInsert" form="register-account-form">
					Register <i className="icon-material-outline-arrow-right-alt"></i></button>
				
				
				{/* <div className="social-login-separator"><span>or</span></div>
				<div className="social-login-buttons">
					<button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f"></i> Register via Facebook</button>
					<button className="google-login ripple-effect"><i className="icon-brand-google-plus-g"></i> Register via Google+</button>
				</div> */}

			</div>
    </div>
  )
}

export default RegistartionForm