import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';

const CardUser = ({ user, border, ...restProps }) => {

  return (
    <div {...restProps} className={`d-flex p-2 align-item-center user-item ${border} rounded `} style={{cursor: "pointer"}}>
          {
            Object.keys(user.avatar).length == 0 && <Avatar size="large" icon={<UserOutlined />} /> || <Avatar size="large" src={user.avatar.url} />
          }
          <div className='ml-1' style={{ transform: 'translateY(-1px)', marginLeft: '7px' }}>
            <span className='d-block'>{user.fullname} <small style={{ opacity: 0.7 }}>({user.username})</small></span>

          </div>
    </div>
  )
}

export default CardUser