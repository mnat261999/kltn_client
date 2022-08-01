import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfileUsers } from "../../redux/actions/profileAction";
import { Avatar, Button } from "antd";
import AvatarCustom from "../AvatarCustom";
import moment from "moment";
import FollowBtn from "../FollowBtn";

const Infor = () => {
  const { id } = useParams();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    dispatch(getProfileUsers({ id, auth }));
    if (id === auth.user._id) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [id, auth, dispatch]);

  /*   console.log(profile)
    
	  console.log(Object.keys(profile.user).length) */

  if (Object.keys(profile.user).length === 0) return null;

  return (
    <div className="info">
      <div className="info_container" key={profile.user._id}>
        {Object.keys(profile.user.avatar).length > 0 ? (
          <AvatarCustom src={profile.user.avatar.url} size="supper-avatar" />
        ) : (
          <Avatar size={150}>USER</Avatar>
        )}

        <div className="info_content">
          <div className="info_content_title">
            <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
              {profile.user.fullname}
              <span style={{ fontSize: "16px" }}>
                {" "}
                ({profile.user.username})
              </span>
            </h2>
          </div>

          <div className="follow_btn">
            <span className="mr-4" /* onClick={() => setShowFollowers(true)} */>
              {profile.user.followers.length} Followers
            </span>
            <span className="ml-4" /* onClick={() => setShowFollowing(true)} */>
              {profile.user.following.length} Following
            </span>
          </div>
          <h6 className="m-0">{profile.user.email}</h6>
          <h6 className="m-0">
            {moment(profile.user.dob).format("DD/MM/YYYY")}
          </h6>
          <p className="m-0">{profile.user.address}</p>
          <a href={profile.user.website} target="_blank" rel="noreferrer">
            {profile.user.website}
          </a>
        </div>

        {profile.user._id === auth.user._id ? (
          <Button shape='round' type='primary'
            /* onClick={() => setOnEdit(true)} */
          >
            Edit Profile
          </Button>
        ) : (
          <FollowBtn user={profile.user} />
        )}

        {/* 				{
					onEdit && <EditProfile setOnEdit={setOnEdit} />
				}

				{
					showFollowers &&
					<Followers
						users={user.followers}
						setShowFollowers={setShowFollowers}
					/>
				}
				{
					showFollowing &&
					<Following
						users={user.following}
						setShowFollowing={setShowFollowing}
					/>
				} */}
      </div>
    </div>
  );
};

export default Infor;
