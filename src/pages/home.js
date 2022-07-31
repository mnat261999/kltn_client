import { Col, Row } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import CardPost from '../components/home/CardPost'
import Status from '../components/home/Status'
import LoadIcon from '../images/loading.gif'

const Home = () => {
  const {homePost} = useSelector(state => state)
  console.log(homePost.loading.loading)
  return (
    <div>
      <Row gutter={[48, 40]} >
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 16 }} lx={{ span: 16 }}>
          <Status />
          {
            homePost.loading.loading? 
            <img src={LoadIcon} alt = "" className='d-block mx-auto'/> :  homePost.result === 0 ? <h2 className='text center'>No post</h2> : <CardPost />
          }
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} lx={{ span: 8 }}>
          {/*           <SuggestFollow /> */}
        </Col>

      </Row>
    </div>
  )
}

export default Home