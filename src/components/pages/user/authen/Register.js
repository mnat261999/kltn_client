import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../../../../redux/actions/authAction'
import { showErrMsg } from '../../../../utils/Notification'
import { isEmail, isEmpty, isMatch, isPass } from '../../../../utils/Validation'



const initialState = {
	fullname: '',
	username: '',
	email: '',
	password: '',
	cf_password: '',
	dob: '',
	gender: 'female'
}

const Register = () => {
	const [user, setUser] = useState(initialState)
	const { fullname, username, email, password, cf_password, dob, gender } = user
	const dispatch = useDispatch()

	const handleChangeInput = e => {
		const { name, value } = e.target
		setUser({ ...user, [name]: value })
	}

	const handleSubmit = async e => {
		e.preventDefault()
		dispatch(register(user))
	}

	return (
		<section className="sign-in-page">
			<div id="container-inside">
				<div id="circle-small"></div>
				<div id="circle-medium"></div>
				<div id="circle-large"></div>
				<div id="circle-xlarge"></div>
				<div id="circle-xxlarge"></div>
			</div>
			<div className="container p-0">
				<div className="row no-gutters">
					<div className="col-md-6 text-center pt-5">
						<div className="sign-in-detail text-white">
							<div className="owl-carousel" data-autoplay="true" data-loop="true" data-nav="false" data-dots="true" data-items="1" data-items-laptop="1" data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1" data-margin="0">

							</div>
						</div>
					</div>
					<div className="col-md-6 bg-white pt-5">
						<div className="sign-in-from">
							<h1 className="mb-0">Sign Up</h1>
							<p>Enter your email address and password to access admin panel.</p>
							<form className="mt-4" onSubmit={handleSubmit}>
								<div className="form-group">
									<label for="exampleInputEmail1">Your Full Name</label>
									<input type="text" className="form-control mb-0" onChange={handleChangeInput} id="fullname" value={fullname} name="fullname" placeholder="Your Full Name" />
								</div>
								<div className="form-group">
									<label for="exampleInputEmail1">Your User Name</label>
									<input type="text" className="form-control mb-0" onChange={handleChangeInput} id="username" value={username} name="username" placeholder="Your User Name" />
								</div>
								<div className="form-group">
									<label for="exampleInputEmail2">Email address</label>
									<input type="email" className="form-control mb-0" onChange={handleChangeInput} id="email" value={email} name="email" placeholder="Enter email" />
								</div>
								<div className="form-group">
									<label for="exampleInputPassword1">Password</label>
									<input type="password" className="form-control mb-0" onChange={handleChangeInput} id="password" value={password} name="password" placeholder="Password" />
								</div>
								<div className="form-group">
									<label for="exampleInputPassword1">Confirm Password</label>
									<input type="password" className="form-control mb-0" onChange={handleChangeInput} id="cf_password" value={cf_password} name="cf_password" placeholder="Confirm Password" />
								</div>
								<div className="form-group">
									<label for="exampleInputDOB">Date of Birth</label>
									<input type="date" className="form-control mb-0" onChange={handleChangeInput} id="dob" value={dob} name="dob" placeholder="Dob" />
								</div>
								<div className="form-group">
									<label for="exampleInputDOB">Gender</label>
									<select className="form-control mb-0" onChange={handleChangeInput} name="gender" value={gender} id="gender" placeholder="Dob">
										<option value="female">Female</option>
										<option value="male">Male</option>
										<option value="orther">Orther</option>
									</select>
								</div>
								<div className="d-inline-block w-100">
									<div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
										<select type="checkbox" className="custom-control-input" id="customCheck1" />
										<label className="custom-control-label" for="customCheck1">I accept <Link>Terms and Conditions</Link></label>
									</div>
									<button type="submit" className="btn btn-primary float-right">Sign Up</button>
								</div>
								<div className="sign-info">
									<span className="dark-color d-inline-block line-height-2">Already Have Account ? <Link to='/'>Log In</Link></span>
									<ul className="iq-social-media">
										<li><Link><i className="ri-facebook-box-line"></i></Link></li>
										<li><Link><i className="ri-twitter-line"></i></Link></li>
										<li><Link><i className="ri-instagram-line"></i></Link></li>
									</ul>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Register