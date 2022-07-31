import { Avatar, Dropdown, Menu } from 'antd'
import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';

const CardHeader = ({ post }) => {
    const { auth } = useSelector(state => state)
    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <Link target="_blank" rel="noopener noreferrer" >
                            Edit Post
                        </Link>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <Link target="_blank" rel="noopener noreferrer" >
                            Delete Post
                        </Link>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <Link target="_blank" rel="noopener noreferrer" >
                            Copy Link
                        </Link>
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
                        <Link target="_blank" rel="noopener noreferrer">
                            Report Post
                        </Link>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <Link target="_blank" rel="noopener noreferrer" >
                            Copy Link
                        </Link>
                    ),
                }
            ]}
        />
    );
    console.log(post)
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