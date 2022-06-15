import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { showErrMsg } from '../../../../utils/Notification'
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
                    console.log('activation_token',err.response.data)
                }
            }
            activationEmail()
        }
    },[activation_token])

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
                        <img src="https://social-pet-bucket.s3.amazonaws.com/mail.png" width="80" alt=""/>
                        <h1 className="mt-3 mb-0">{(success && "Success !") || (!success && "Fail !")}</h1>
                        <p>{msg}</p>
                        <div className="d-inline-block w-100">
                            <Link className="btn btn-primary mt-3" to='/'>Back to Login</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Activate