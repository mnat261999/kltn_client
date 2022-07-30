import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../redux/actions/authAction'




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
		<Fragment>
			<div className="main-wrap">
				<div className="nav-header bg-transparent shadow-none border-0">
					<div className="nav-top w-100">
						<Link to="/"><i className="feather-zap text-success display1-size me-2 ms-0"></i><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">Sociala. </span> </Link>
						<button className="nav-menu me-0 ms-auto"></button>

						<Link to="/" className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl">Register</Link>
						<Link to="/register" className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl">Register</Link>
					</div>
				</div>


				<div className="row">
					<div className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
						style={{ backgroundImage: `url("https://via.placeholder.com/800x950.png")` }}></div>
					<div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
						<div className="card shadow-none border-0 ms-auto me-auto login-card">
							<div className="card-body rounded-0 text-left">
								<h2 className="fw-700 display1-size display2-md-size mb-4">Create <br />your account</h2>
								<form onSubmit={handleSubmit}>

									<div className="form-group icon-input mb-3">
										<i className="font-sm ti-user text-grey-500 pe-0"></i>
										<input type="text" className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600" placeholder="Your Full Name" onChange={handleChangeInput} id="fullname" value={fullname} name="fullname" />
									</div>
									<div className="form-group icon-input mb-3">
										<i className="font-sm ti-user text-grey-500 pe-0"></i>
										<input type="text" className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600" placeholder="Your Username" onChange={handleChangeInput} id="username" value={username} name="username" />
									</div>
									<div className="form-group icon-input mb-3">
										<i className="font-sm ti-email text-grey-500 pe-0"></i>
										<input type="text" className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600" placeholder="Your Email Address" onChange={handleChangeInput} id="email" value={email} name="email" />
									</div>
									<div className="form-group icon-input mb-3">
										<input type="Password" className="style2-input ps-5 form-control text-grey-900 font-xss ls-3" placeholder="Password" onChange={handleChangeInput} id="password" value={password} name="password" />
										<i className="font-sm ti-lock text-grey-500 pe-0"></i>
									</div>
									<div className="form-group icon-input mb-3">
										<input type="Password" className="style2-input ps-5 form-control text-grey-900 font-xss ls-3" placeholder="Confirm Password" onChange={handleChangeInput} id="cf_password" value={cf_password} name="cf_password" />
										<i className="font-sm ti-lock text-grey-500 pe-0"></i>
									</div>
									<div className="form-group icon-input mb-3">
										<input type="date" className="style2-input ps-5 form-control text-grey-900 font-xss ls-3" onChange={handleChangeInput} id="dob" value={dob} name="dob" placeholder="Dob" />
										<i className="font-sm ti-calendar text-grey-500 pe-0"></i>
									</div>
									<div className="form-group icon-input mb-3">
										<select style={{ lineHeight: '50px' }} className="style2-input ps-5 form-control text-grey-900 font-xss ls-3" onChange={handleChangeInput} name="gender" value={gender} id="gender" placeholder="Gender" >
											<option value="female">Female</option>
											<option value="male">Male</option>
											<option value="orther">Orther</option>
										</select>
										<i className="font-sm ti-user text-grey-500 pe-0"></i>
									</div>

									<div className="col-sm-12 p-0 text-left">
										<div className="form-group mb-1"><button type='submit' className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 ">Register</button></div>
										<h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">Already have account <Link to="/" className="fw-700 ms-1">Login</Link></h6>
									</div>
								</form>

							</div>
						</div>
					</div>

				</div>
			</div>
		</Fragment>
	)
}

export default Register