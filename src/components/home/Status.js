import { Avatar, Button } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import AvatarCustom from '../AvatarCustom'

const Status = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div className="status my-3 d-flex">
            {Object.keys(auth.user.avatar).length > 0 ? <AvatarCustom src={auth.user.avatar.url} size="big-avatar" /> : <Avatar size={48}>USER</Avatar>}

            <Button className="statusBtn flex-fill" onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}>
                {auth.user.username}, what are you thinking?
            </Button>

        </div>
    )
}

export default Status