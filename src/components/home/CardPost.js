import React from 'react'
import { useSelector } from 'react-redux'
import CardBody from './posts/CardBody'
import CardFooter from './posts/CardFooter'
import CardHeader from './posts/CardHeader'

const CardPost = () => {
	const { homePost } = useSelector(state => state)
	return (
		<>
			{
				homePost.posts.map(p => (
					<div key={p._id} className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
						<CardHeader post={p} />
						<CardBody post={p}/>
						<CardFooter post={p}/>
					</div>
				))
			}
		</>
	)
}

export default CardPost