import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfileUsers } from "../../../../redux/actions/profileAction";
const { TabPane } = Tabs;


const Profile = () => {
    const { id } = useParams()
    const auth = useSelector(state => state.auth)
    const profile = useSelector(state => state.profile)
    const dispatch = useDispatch()
    const [check, setCheck] = useState(false)

    useEffect(() => {
        dispatch(getProfileUsers({ id, auth }))
        if (id === auth.user._id) {
            setCheck(true)
        } else {
            setCheck(false)
        }
    }, [id, auth])

    return (
        <div className="card w-100 border-0 p-0 bg-white shadow-xss rounded-xxl">
            <div className="card-body h250 p-0 rounded-xxl overflow-hidden m-3" style={{height:"400px"}}><img src={Object.keys(profile.user.cover).length > 0 ? profile.user.cover.url : "https://via.placeholder.com/1200x250.png"} alt="avater" /></div>
            <div className="card-body p-0 position-relative">
                <figure className="avatar position-absolute w100 z-index-1" style={{ top: '-40px', left: '30px' }}><img src={Object.keys(profile.user.avatar).length > 0 ? profile.user.avatar.url : "https://social-pet-bucket.s3.amazonaws.com/avatar_default.png"} alt="avater" className="float-right p-1 bg-white rounded-circle w-100" /></figure>
                <h4 className="fw-700 font-sm mt-2 mb-lg-5 mb-4 pl-15">{profile.user.fullname} <span className="fw-500 font-xssss text-grey-500 mt-1 mb-3 d-block">{profile.user.username}</span></h4>
                {
                    !check &&
                    <div className="d-flex align-items-center justify-content-center position-absolute-md right-15 top-0 me-2">
                        <a href="/defaultmember" className="d-none d-lg-block bg-success p-3 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-3">Follow</a>
                        <a href="/defaultmember" className="d-none d-lg-block p-3 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-3" style={{ marginLeft: '15px', backgroundColor: '#6c757d' }}>Block</a>
                    </div>
                }
                {
                    check && ""
                }
            </div>

            <div className="card-body d-block w-100 shadow-none mb-0 p-0 border-top-xs tabs-profile">
                <Tabs defaultActiveKey="1" style={{ marginLeft: '20px' }}>
                    <TabPane tab="Post" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="About" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Following" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="Follower" key="4">
                        Content of Tab Pane 4
                    </TabPane>
                    <TabPane tab="Video" key="5">
                        Content of Tab Pane 5
                    </TabPane>
                    <TabPane tab="Images" key="6">
                        Content of Tab Pane 6
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
};

export default Profile;
