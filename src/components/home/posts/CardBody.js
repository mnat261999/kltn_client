import { Carousel } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CardBody = ({ post }) => {
    const [readMore, setReadMore] = useState(false)
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <>
            <div className="card-body p-0 me-lg-5">
                <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
                    {
                        post.content.length < 60 ? post.content : readMore ? post.content + " " : post.content.slice(0, 60) + "....."
                    }
                    {
                        post.content.length > 60 &&
                        <span className="fw-600 text-primary ms-2" onClick={() => setReadMore(!readMore) } style={{cursor:'pointer'}}>
                            {readMore? "Hide content": "Read more"}
                        </span>
                    }
                </p>
            </div>
            {
                Object.keys(post.medias).length > 0 ?
                    <div className="card-body d-block p-0 mb-3">
                        <div className="row ps-2 pe-2">
                            <div className="col-sm-12 p-1">
                                <Carousel autoplay>
                                    {
                                        post.medias.map(m => (
                                            (m.typeMedia == 'image/jpeg' || m.typeMedia == 'image/png') &&
                                            <img
                                                src={m.media.url}
                                                className="rounded-3 w-100"
                                                alt="post" />
                                            ||
                                            m.typeMedia == 'video/mp4' &&
                                            <video
                                                src={m.media.url}
                                                className="rounded-3 w-100"
                                                alt="post" />
                                        ))
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    : ""
            }
        </>
    )
}

export default CardBody