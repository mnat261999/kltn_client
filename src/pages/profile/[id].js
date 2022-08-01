import React from 'react'
import Infor from '../../components/profile/Infor'
import Post from '../../components/profile/Post'
import LoadIcon from '../../images/loading.gif'
import { useSelector } from 'react-redux'
const Profile = () => {
  const {profile} = useSelector(state => state)
  return (
    <div className='profile'>
    {/* {
      profile.loading
      ? <img src={LoadIcon} alt="loading" className='d-block mx-auto my-4'/>
      : <Infor/>
    } */}
    <Infor/>
        <Post/>
    </div>
  )
}

export default Profile