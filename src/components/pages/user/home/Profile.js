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
    <></>
  );
};

export default Profile;
