import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { updateProfileUser } from '../../redux/actions/profileAction'
import { checkImage } from '../../utils/imageUpload'
import { showErrMsg } from '../../utils/Notification'

const EditProfile = ({user, setOnEdit}) => {

    const initState = {
        fullname: '', username: '', dob: '', address: '', website: '', gender: ''
    }
    const [userData, setUserData] = useState(initState)
    const {  fullname, username, dob,  address, website, gender } = userData
    var date = userData.dob.slice(0,10)
    userData.dob = date
    const [avatar, setAvatar] = useState('')

    const { auth, theme } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        setUserData(auth.user)
    }, [auth.user])


    const changeAvatar = (e) => {
        const file = e.target.files[0]

        const err = checkImage(file)

        if(err.length > 0) {
            showErrMsg("error", err);
            return dispatch({
                type: GLOBALTYPES.ALERT, payload: {error: err}
            })
         

        } 


        setAvatar(file)
    }

    const handleInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]:value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateProfileUser({userData, avatar, auth}))
    }

  return (
    
    <div className="edit_profile">
    <button className="btn btn-danger btn_close"
    onClick={() => setOnEdit(false)}>
        Close
    </button>

    <form onSubmit={handleSubmit}>
        <div className="info_avatar">
            <img src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar.url} 
            alt="avatar" style={{filter: theme ? 'invert(1)' : 'invert(0)'}} />
            <span>
                <i className="fas fa-camera" />
                <p>Change</p>
                <input type="file" name="file" id="file_up"
                accept="image/*" onChange={changeAvatar} />
            </span>
        </div>
        
        <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <div className="position-relative">
                <input type="text" className="form-control" id="fullname"
                name="fullname" value={fullname} onChange={handleInput} />
                <small className="text-danger position-absolute"
                style={{top: '50%', right: '5px', transform: 'translateY(-50%)'}}>
                    {fullname.length}/25
                </small>
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="address">Username</label>
            <input type="text" name="username" value={username}
            className="form-control" onChange={handleInput} />
        </div>
            <div className="form-group">
                <label htmlFor="">Dob</label>
                <input type="date" name="dob" value={dob}
                className="form-control" onChange={handleInput} />
            </div>
  

        <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" name="address" value={address}
            className="form-control" onChange={handleInput} />
        </div>

        <div className="form-group">
            <label htmlFor="website">Website</label>
            <input type="text" name="website" value={website}
            className="form-control" onChange={handleInput} />
        </div>

       

        <label htmlFor="gender">Gender</label>
        <div className="input-group-prepend px-0 mb-4">
            <select name="gender" id="gender" value={gender}
            className="custom-select text-capitalize"
            onChange={handleInput}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </div>

        <button className="btn btn-info w-100" type="submit">Save</button>
    </form>
</div>
  )
}

export default EditProfile