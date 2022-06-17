import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GLOBALTYPES } from "../../../../redux/actions/globalTypes";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { getProfileUsers } from "../../../../redux/actions/profileAction";

const Profile = () => {
  const { id } = useParams();
  const { auth, profile } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    setUserData([auth.user]);
    console.log(auth.user.cover.url)
    if (id === auth.user._id) {
      setUserData([auth.user]);
    } else {
      dispatch(getProfileUsers({ users: profile.users, id, auth }));
    }
  }, [id, auth.user, dispatch, profile.users]);

  return (
    <div>
      {userData.map((user) => (
        <div className="col-sm-12">
          <div className="iq-card">
            <div className="iq-card-body profile-page p-0">
              <div className="profile-header">
                <div className="cover-container">
                  <img
                    src={user.cover.url === undefined ? "images/page-img/profile-bg1.jpg" : user.cover.url}
                    // 
                    alt="profile-bg"
                    className="rounded img-fluid"
                  />
                  <ul className="header-nav d-flex flex-wrap justify-end p-0 m-0">
                    <li>
                      <Link to="">
                        <i className="ri-pencil-line"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="ri-settings-4-line"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="user-detail text-center mb-3">
                  <div className="profile-img">
                    <img
                      src={user.avatar.url === undefined ? "images/user/11.png" : user.avatar.url}
                      // "images/user/11.png"
                      alt="profile-img"
                      className="avatar-130 img-fluid"
                    />
                  </div>
                  <div className="profile-detail">
                    <h3 className="">{user.username}</h3>
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
                        <p className="mb-0">
                          {user.followers.lenght === 0
                            ? user.followers.lenght
                            : 0}
                        </p>
                      </li>
                      <li className="text-center pl-3">
                        <h6>Following</h6>
                        <p className="mb-0">
                          {user.following.lenght === 0
                            ? user.following.lenght
                            : 0}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
