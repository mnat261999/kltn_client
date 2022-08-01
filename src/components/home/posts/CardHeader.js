import { Avatar, Dropdown, Menu } from 'antd'
import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { GLOBALTYPES } from '../../../redux/actions/globalTypes';

const CardHeader = ({ post }) => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const handleEditPost = () => {
        dispatch({ type: GLOBALTYPES.STATUS, payload: { ...post, onEdit: true } })
    }
    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <span target="_blank" rel="noopener noreferrer" onClick={handleEditPost}>
                            Edit Post
                        </span>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <span target="_blank" rel="noopener noreferrer" >
                            Delete Post
                        </span>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <span target="_blank" rel="noopener noreferrer" >
                            Copy Link
                        </span>
                    ),
                }
            ]}
        />
    );

    const menu1 = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <span target="_blank" rel="noopener noreferrer">
                            Report Post
                        </span>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <span target="_blank" rel="noopener noreferrer" >
                            Save Post
                        </span>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <span target="_blank" rel="noopener noreferrer" >
                            Copy Link
                        </span>
                    ),
                }
            ]}
        />
    );
    return (
        <div className="card-body p-0 d-flex">
            <figure className="avatar me-3">
                {Object.keys(post.userInfor[0].avatar).length > 0 ? <Avatar size={45} src={post.userInfor[0].avatar.url}></Avatar> : <Avatar size={45}>USER</Avatar>}
            </figure>
            <Link to={`/profile/${post.userInfor[0]._id}`} className="fw-700 text-grey-900 font-xssss mt-1">
                {" "}
                {post.userInfor[0].fullname}{" "}
                <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                    {" "}
                    {moment(post.createdAt).fromNow()}
                </span>
            </Link>

            {
                auth.user._id === post.userInfor[0]._id ?
                    <Dropdown overlay={menu} placement="bottom">
                        <div className="ms-auto pointer">
                            <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" />
                        </div>
                    </Dropdown>
                    :
                    <Dropdown overlay={menu1} placement="bottom">
                        <div className="ms-auto pointer">
                            <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" />
                        </div>
                    </Dropdown>
            }


        </div>
    )
}

export default CardHeader