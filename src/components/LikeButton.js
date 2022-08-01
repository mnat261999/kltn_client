import React from 'react'
import { useSelector } from 'react-redux'

const LikeButton = ({isLike, handleLike, handleUnLike}) => {
    const { theme } = useSelector(state => state)

    return (
        <>
            {
                isLike
                ? <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" onClick={handleUnLike} />
                : <i className="feather-heart text-black bg-white-gradiant me-2 btn-round-xs font-xss" onClick={handleLike} />
            }
        </>
    )
}


export default LikeButton
