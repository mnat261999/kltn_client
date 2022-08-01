import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProfileUsers } from '../../redux/actions/profileAction'
import { Avatar } from 'antd';
import AvatarCustom from '../AvatarCustom'
import moment from 'moment';
import FollowBtn from '../FollowBtn'

const Infor = () => {
	const { id } = useParams()
	const {auth, profile} = useSelector(state => state)
	const dispatch = useDispatch()
	const [userData, setUserData] = useState([])

	useEffect(() => {
		console.log(auth)
		if(id === auth.user._id){
			setUserData([auth.user])
		}else {
			dispatch(getProfileUsers({users: profile.users, id, auth}))
			const newData = profile.users.filter(user => user._id === id)
            setUserData(newData)
		}
	}, [id, auth.user, dispatch, profile.users])

	return (
		<div className="info">
		<h2> INfo {id}</h2>
		{
		 userData.map(user => (
			<div className="info_container" key={user._id}>
			<AvatarCustom src={user.avatar.url} size="supper-avatar" />				

				<div className="info_content">
					<div className="info_content_title">
						<h2 style={{fontSize:'20px', fontWeight:'bold'}}>{user.fullname}<span style={{fontSize:'16px'}}> ({user.username})</span></h2>
						{
							user._id === auth.user._id
								? <button className="btn btn-outline-info"
									/* onClick={() => setOnEdit(true)} */>
									Edit Profile
								</button>

								:  <FollowBtn user={user} />
						}
					</div>

					<div className="follow_btn mb-2">
						<span className="mr-4" /* onClick={() => setShowFollowers(true)} */>
							{user.followers.length} Followers
						</span>
						<span className="ml-4" /* onClick={() => setShowFollowing(true)} */>
							{user.following.length} Following
						</span>
					</div>
					<h6 className="m-0">{user.email}</h6>
					<h6 className="m-0">{moment(user.dob).format('DD/MM/YYYY')}</h6>
					<h6 className="m-0">{user.address}</h6>
					<a href={user.website} target="_blank" rel="noreferrer">
                        {user.website}
                    </a>
				</div>

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
		 )) 
		}
		</div>
	)
}

export default Infor