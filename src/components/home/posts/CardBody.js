import React from 'react'

const CardBody = () => {
    return (
        <>
            <div className="card-body p-0 me-lg-5">
                <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
                    dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis
                    pharetra. Proin blandit ac massa sed rhoncus.{" "}
                    <a href="/defaultvideo" className="fw-600 text-primary ms-2">
                        See more
                    </a>
                </p>
            </div>
            <div className="card-body d-block p-0 mb-3">
                <div className="row ps-2 pe-2">
                    <div className="col-sm-12 p-1">
                        <img
                            src="assets/images/post.png"
                            className="rounded-3 w-100"
                            alt="post"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardBody