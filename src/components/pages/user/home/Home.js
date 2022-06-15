import React from 'react'
import Profile from './Profile'

const Home = () => {
  return (
    <div id="content-page" className="content-page">
      <div className="container">
        <div className="row">
          <Profile />
        </div>
      </div>
    </div>
  )
}

export default Home