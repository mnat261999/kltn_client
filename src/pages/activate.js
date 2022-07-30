import React, { useState, useEffect, useContext, Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


const Activate = () => {
    const {activation_token} = useParams()
    const [success, setSuccess] = useState(false)
    const [msg, setMsg] = useState('')

    
    useEffect(() => {
        if(activation_token){
            const activationEmail = async () => {
                try {
                    const res = await axios.post('/api/user/activation', {activation_token})

                    setSuccess(true)
                    setMsg(res.data.msg)
                } catch (err) {
                    setSuccess(false)
                    setMsg(err.response.data.msg)
                    console.log(err.response.data.msg)
                    console.log('activation_token',err.response.data)
                }
            }
            activationEmail()
        }
    },[activation_token])

    return (
        <Fragment>
        <div className="main-wrap">
            <div className="nav-header bg-transparent shadow-none border-0">
                <div className="nav-top w-100">
                    <Link to="/"><i className="feather-zap text-success display1-size me-2 ms-0"></i><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">Sociala. </span> </Link>
                    <button className="nav-menu me-0 ms-auto"></button>

                    <Link to="/" className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl">Activate</Link>
                    <Link to="/register" className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl">Register</Link>
                </div>
            </div>


            <div className="row">
                <div className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
                    style={{ backgroundImage: `url("https://via.placeholder.com/800x950.png")` }}></div>
                <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                    <div className="card shadow-none border-0 ms-auto me-auto login-card">
                        <div className="card-body rounded-0 text-left">
                            <h2 className="fw-700 display1-size display2-md-size mb-4">{(success && "Success !") || (!success && "Fail !")} {msg}</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </Fragment>
    )
}

export default Activate