import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (

        <div className="col-sm-12">
            <div className="iq-card">
                <div className="iq-card-body profile-page p-0">
                    <div className="profile-header">
                        <div className="cover-container">
                            <img src="images/page-img/profile-bg1.jpg" alt="profile-bg" className="rounded img-fluid" />
                            <ul className="header-nav d-flex flex-wrap justify-end p-0 m-0">
                                <li><Link to=''><i className="ri-pencil-line"></i></Link></li>
                                <li><Link to=''><i className="ri-settings-4-line"></i></Link></li>
                            </ul>
                        </div>
                        <div className="user-detail text-center mb-3">
                            <div className="profile-img">
                                <img src="images/user/11.png" alt="profile-img" className="avatar-130 img-fluid" />
                            </div>
                            <div className="profile-detail">
                                <h3 className="">Bni Cyst</h3>
                            </div>
                        </div>
                        <div className="profile-info p-4 d-flex align-items-center justify-content-center position-relative">
                            <div className="social-info">
                                <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                                    <li className="text-center pl-3">
                                        <h6>Posts</h6>
                                        <p className="mb-0">690</p>
                                    </li>
                                    <li className="text-center pl-3">
                                        <h6>Followers</h6>
                                        <p className="mb-0">206</p>
                                    </li>
                                    <li className="text-center pl-3">
                                        <h6>Following</h6>
                                        <p className="mb-0">100</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile