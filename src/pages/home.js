import { Col, Row } from 'antd'
import React from 'react'
import CardPost from '../components/CardPost'
import Status from '../components/home/Status'

const Home = () => {
  return (
    <div>
      <Row gutter={[48, 40]} >
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 16 }} lx={{ span: 16 }}>
          <Status />
          <CardPost />
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} lx={{ span: 8 }}>
          {/*           <SuggestFollow /> */}
        </Col>

      </Row>
    </div>
  )
}

export default Home