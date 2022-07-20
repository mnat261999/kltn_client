import React, { Fragment } from 'react'
import Profile from './Profile'

const Home = () => {
  return (
    <Fragment>
      <div className="main-content right-chat-active">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left pe-0">
            <div className="row">
              <div className="col-xl-12 mb-3">
                <Profile/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home