import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { GLOBALTYPES } from '../../../redux/actions/globalTypes'
import { showErrMsg, showSuccessMsg } from '../../../utils/Notification'
import SearchUser from './SearchUser'

const HeaderUser = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const home = async() => {
        window.location.href = '/';
    }
    const profile = async() => {
        window.location.href = '/profile';
    }
    const handleLogout = async () => {
        try {
            const res = await axios.post('api/user/logout')
            localStorage.removeItem('firstLogin')
            dispatch({ 
                type: GLOBALTYPES.AUTH, 
                payload: {
                    token: '',
                    user: '',
                    isAdmin: '',
                    isLogin: ''
                } 
            })

            showSuccessMsg('success',res.data.msg)
    
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
            showErrMsg('error', err.response.data.msg)
            console.log('handleLogout',err.response.data);
        }
    }

    return (
        <div className="iq-top-navbar">
            <div className="iq-navbar-custom">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <div className="iq-navbar-logo d-flex justify-content-between">
                        <Link onClick={home}>
                            <img src="images/logo.png" className="img-fluid" alt="" />
                            <span>SocialV</span>
                        </Link>
                    </div>
                    <div className="iq-search-bar">
                        <SearchUser/>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                        <i className="ri-menu-3-line"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto navbar-list">
                            <li>
                                <Link onClick={profile} className="iq-waves-effect d-flex align-items-center">
                                    <img src={Object.keys(auth.user.avatar).length > 0 ? auth.user.avatar.url : "https://social-pet-bucket.s3.amazonaws.com/avatar_default.png"} className="img-fluid rounded-circle mr-3" alt="user" />
                                    <div className="caption">
                                        <h6 className="mb-0 line-height">{auth.user.fullname}</h6>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={home} className="iq-waves-effect d-flex align-items-center">
                                    <i className="ri-home-line"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="search-toggle iq-waves-effect" href="#"><i className="ri-group-line"></i></a>
                                <div className="iq-sub-dropdown iq-sub-dropdown-large">
                                    <div className="iq-card shadow-none m-0">
                                        <div className="iq-card-body p-0 ">
                                            <div className="bg-primary p-3">
                                                <h5 className="mb-0 text-white">Friend Request<small className="badge  badge-light float-right pt-1">4</small></h5>
                                            </div>
                                            <div className="iq-friend-request">
                                                <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between" >
                                                    <div className="d-flex align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded" src="images/user/01.jpg" alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Jaques Amole</h6>
                                                            <p className="mb-0">40  friends</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="javascript:void();" className="mr-3 btn btn-primary rounded">Confirm</a>
                                                        <a href="javascript:void();" className="mr-3 btn btn-secondary rounded">Delete Request</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="iq-friend-request">
                                                <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between" >
                                                    <div className="d-flex align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded" src="images/user/02.jpg" alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Lucy Tania</h6>
                                                            <p className="mb-0">12  friends</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="javascript:void();" className="mr-3 btn btn-primary rounded">Confirm</a>
                                                        <a href="javascript:void();" className="mr-3 btn btn-secondary rounded">Delete Request</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="iq-friend-request">
                                                <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between" >
                                                    <div className="d-flex align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded" src="images/user/03.jpg" alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Manny Petty</h6>
                                                            <p className="mb-0">3  friends</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="javascript:void();" className="mr-3 btn btn-primary rounded">Confirm</a>
                                                        <a href="javascript:void();" className="mr-3 btn btn-secondary rounded">Delete Request</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="iq-friend-request">
                                                <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between" >
                                                    <div className="d-flex align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded" src="images/user/04.jpg" alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Marsha Mello</h6>
                                                            <p className="mb-0">15  friends</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="javascript:void();" className="mr-3 btn btn-primary rounded">Confirm</a>
                                                        <a href="javascript:void();" className="mr-3 btn btn-secondary rounded">Delete Request</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <a href="#" className="mr-3 btn text-primary">View More Request</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="search-toggle iq-waves-effect">
                                    <div id="lottie-beil">
                                        <i className="las la-bell"></i>
                                    </div>
                                    {/* <span className="bg-danger dots"></span> */}
                                </a>
                                <div className="iq-sub-dropdown">
                                    <div className="iq-card shadow-none m-0">
                                        <div className="iq-card-body p-0 ">
                                            <div className="bg-primary p-3">
                                                <h5 className="mb-0 text-white">All Notifications<small className="badge  badge-light float-right pt-1">4</small></h5>
                                            </div>
                                            <a href="#" className="iq-sub-card" >
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded" src="images/user/01.jpg" alt="" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Emma Watson Bni</h6>
                                                        <small className="float-right font-size-12">Just Now</small>
                                                        <p className="mb-0">95 MB</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card" >
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded" src="images/user/02.jpg" alt="" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">New customer is join</h6>
                                                        <small className="float-right font-size-12">5 days ago</small>
                                                        <p className="mb-0">Cyst Bni</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card" >
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded" src="images/user/03.jpg" alt="" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Two customer is left</h6>
                                                        <small className="float-right font-size-12">2 days ago</small>
                                                        <p className="mb-0">Cyst Bni</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card" >
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded" src="images/user/04.jpg" alt="" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">New Mail from Fenny</h6>
                                                        <small className="float-right font-size-12">3 days ago</small>
                                                        <p className="mb-0">Cyst Bni</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="search-toggle iq-waves-effect">
                                    <div id="lottie-mail">
                                        <i className="las la-inbox"></i>
                                    </div>
                                   {/*  <span className="bg-primary count-mail"></span> */}
                                </a>
                                <div className="iq-sub-dropdown">
                                    <div className="iq-card shadow-none m-0">
                                        <div className="iq-card-body p-0 ">
                                            <div className="bg-primary p-3">
                                                <h5 className="mb-0 text-white">All Messages<small className="badge  badge-light float-right pt-1">5</small></h5>
                                            </div>
                                            <a href="#" className="iq-sub-card" >
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded" src="images/user/01.jpg" alt="" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Bni Emma Watson</h6>
                                                        <small className="float-left font-size-12">13 Jun</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card" >
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded" src="images/user/02.jpg" alt="" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                                                        <small className="float-left font-size-12">20 Apr</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card" >
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded" src="images/user/03.jpg" alt="" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Why do we use it?</h6>
                                                        <small className="float-left font-size-12">30 Jun</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card" >
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded" src="images/user/04.jpg" alt="" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Variations Passages</h6>
                                                        <small className="float-left font-size-12">12 Sep</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card" >
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded" src="images/user/05.jpg" alt="" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                                                        <small className="float-left font-size-12">5 Dec</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-list">
                            <li>
                                <Link to = '' className="search-toggle iq-waves-effect d-flex align-items-center">
                                    <i className="ri-arrow-down-s-fill"></i>
                                </Link>
                                <div className="iq-sub-dropdown iq-user-dropdown">
                                    <div className="iq-card shadow-none m-0">
                                        <div className="iq-card-body p-0 ">
                                            <div className="bg-primary p-3 line-height">
                                                <h5 className="mb-0 text-white line-height">Hello Bni Cyst</h5>
                                                <span className="text-white font-size-12">Available</span>
                                            </div>
                                            <a href="profile.html" className="iq-sub-card iq-bg-primary-hover">
                                                <div className="media align-items-center">
                                                    <div className="rounded iq-card-icon iq-bg-primary">
                                                        <i className="ri-file-user-line"></i>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">My Profile</h6>
                                                        <p className="mb-0 font-size-12">View personal profile details.</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="profile-edit.html" className="iq-sub-card iq-bg-warning-hover">
                                                <div className="media align-items-center">
                                                    <div className="rounded iq-card-icon iq-bg-warning">
                                                        <i className="ri-profile-line"></i>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Edit Profile</h6>
                                                        <p className="mb-0 font-size-12">Modify your personal details.</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="account-setting.html" className="iq-sub-card iq-bg-info-hover">
                                                <div className="media align-items-center">
                                                    <div className="rounded iq-card-icon iq-bg-info">
                                                        <i className="ri-account-box-line"></i>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Account settings</h6>
                                                        <p className="mb-0 font-size-12">Manage your account parameters.</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="privacy-setting.html" className="iq-sub-card iq-bg-danger-hover">
                                                <div className="media align-items-center">
                                                    <div className="rounded iq-card-icon iq-bg-danger">
                                                        <i className="ri-lock-line"></i>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Privacy Settings</h6>
                                                        <p className="mb-0 font-size-12">Control your privacy parameters.</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="d-inline-block w-100 text-center p-3">
                                                <Link onClick={handleLogout} className="bg-primary iq-sign-btn" href="sign-in.html" role="button">Sign out<i className="ri-login-box-line ml-2"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default HeaderUser