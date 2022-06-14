import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../../redux/actions/authAction'
import { showErrMsg } from '../../../../utils/Notification'

const initialState = {
    email: '',
    password: ''
}

const Login = () => {
    const [user, setUser] = useState(initialState)
    const {email, password} = user
    const dispatch = useDispatch()

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(user))
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
                            <h1 className="mb-0">Sign in</h1>
                            <p>Enter your email address and password to access admin panel.</p>
                            <form className="mt-4" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control mb-0" placeholder="Enter email"  id="email" value={email} name="email" onChange={handleChangeInput} />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <Link className="float-right">Forgot password?</Link>
                                    <input type="password" className="form-control mb-0" placeholder="Enter password" id="password" value={password} name="password" onChange={handleChangeInput} />
                                </div>
                                <div className="d-inline-block w-100">
                                    <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" for="customCheck1">Remember Me</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary float-right" disabled={email && password ? false: true}>Sign in</button>
                                </div>
                                <div className="sign-info">
                                    <span className="dark-color d-inline-block line-height-2">Don't have an account? <Link to='/register'>Sign up</Link></span>
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

export default Login