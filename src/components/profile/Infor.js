import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProfileUsers } from '../../redux/actions/profileAction'
import { Avatar } from 'antd';
import AvatarCustom from '../AvatarCustom'
import moment from 'moment';
import FollowBtn from '../FollowBtn'
import EditProfile from './EditProfile'

const Infor = () => {
	const { id } = useParams()
	const auth = useSelector(state => state.auth)
	const dispatch = useDispatch()
	const profile = useSelector(state => state.profile)
	const [check, setCheck] = useState(false)
	const [onEdit, setOnEdit] = useState(false)
	useEffect(() => {
		dispatch(getProfileUsers({ id, auth }))
		if (id === auth.user._id) {
			setCheck(true)
		} else {
			setCheck(false)
		}
	}, [id, auth,dispatch])

	/*   console.log(profile)
    
	  console.log(Object.keys(profile.user).length) */

//	if (Object.keys(profile.user).length === 0) return null;

	return (
		<div className="info">
			<div className="info_container" key={profile.user._id}>
				{/* {Object.keys(profile.user.avatar).length > 0 ? <AvatarCustom src={profile.user.avatar.url} size="supper-avatar" /> :  <Avatar size={150}>USER</Avatar>} */}
				

				<div className="info_content">
					<div className="info_content_title">
						<h2 style={{fontSize:'20px', fontWeight:'bold'}}>{profile.user.fullname}<span style={{fontSize:'16px'}}> ({profile.user.username})</span></h2>
						{
							profile.user._id === auth.user._id
								? <button className="btn btn-outline-info"
									 onClick={() => setOnEdit(true)} >
									Edit Profile
								</button>

								:  <FollowBtn user={profile.user} />
						}
					</div>

					<div className="follow_btn mb-2">
						<span className="mr-4" /* onClick={() => setShowFollowers(true)} */>
							{profile.user.followers.length} Followers
						</span>
						<span className="ml-4" /* onClick={() => setShowFollowing(true)} */>
							{profile.user.following.length} Following
						</span>
					</div>
					<h5 className="">{profile.user.email}</h5>
					<h5 className="">{moment(profile.user.dob).format('DD/MM/YYYY')}</h5>
					<h5 className="">{profile.user.address}</h5>
					<a href={profile.user.website} target="_blank" rel="noreferrer">
                        {profile.user.website}
                    </a>
				</div>

				{
					onEdit && <EditProfile 
						user={profile.user}
						setOnEdit={setOnEdit} 
					/>
				}

				{/* {
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
	)
}

export default Infor