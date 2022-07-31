import React from 'react'

const CardFooter = () => {
    return (
        <div className="card-body d-flex p-0">
            <div className="emoji-bttn pointer d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2">
                <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" />
                2.8K Like
            </div>
            <div className="emoji-wrap pointer ">
                <ul className="emojis list-inline mb-0">
                    <li className="emoji list-inline-item">
                        <i className="em em---1" />{" "}
                    </li>
                    <li className="emoji list-inline-item">
                        <i className="em em-angry" />
                    </li>
                    <li className="emoji list-inline-item">
                        <i className="em em-anguished" />{" "}
                    </li>
                    <li className="emoji list-inline-item">
                        <i className="em em-astonished" />{" "}
                    </li>
                    <li className="emoji list-inline-item">
                        <i className="em em-blush" />
                    </li>
                    <li className="emoji list-inline-item">
                        <i className="em em-clap" />
                    </li>
                    <li className="emoji list-inline-item">
                        <i className="em em-cry" />
                    </li>
                    <li className="emoji list-inline-item">
                        <i className="em em-full_moon_with_face" />
                    </li>
                </ul>
            </div>
            <a
                href="/defaultvideo"
                className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
            >
                <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg" />
                <span className="d-none-xss">22 Comment</span>
            </a>
            <div
                className="pointer ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss "
                id="dropdownMenu32"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg" />
                <span className="d-none-xs">Share</span>
            </div>
            <div
                className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg right-0 "
                aria-labelledby="dropdownMenu32"
            >
                <h4 className="fw-700 font-xss text-grey-900 d-flex align-items-center">
                    Share{" "}
                    <i className="feather-x ms-auto font-xssss btn-round-xs bg-greylight text-grey-900 me-2" />
                </h4>
                <div className="card-body p-0 d-flex">
                    <ul className="d-flex align-items-center justify-content-between mt-2">
                        <li className="me-1">
                            <span className="btn-round-lg pointer bg-facebook">
                                <i className="font-xs ti-facebook text-white" />
                            </span>
                        </li>
                        <li className="me-1">
                            <span className="btn-round-lg pointer bg-twiiter">
                                <i className="font-xs ti-twitter-alt text-white" />
                            </span>
                        </li>
                        <li className="me-1">
                            <span className="btn-round-lg pointer bg-linkedin">
                                <i className="font-xs ti-linkedin text-white" />
                            </span>
                        </li>
                        <li className="me-1">
                            <span className="btn-round-lg pointer bg-instagram">
                                <i className="font-xs ti-instagram text-white" />
                            </span>
                        </li>
                        <li>
                            <span className="btn-round-lg pointer bg-pinterest">
                                <i className="font-xs ti-pinterest text-white" />
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="card-body p-0 d-flex">
                    <ul className="d-flex align-items-center justify-content-between mt-2">
                        <li className="me-1">
                            <span className="btn-round-lg pointer bg-tumblr">
                                <i className="font-xs ti-tumblr text-white" />
                            </span>
                        </li>
                        <li className="me-1">
                            <span className="btn-round-lg pointer bg-youtube">
                                <i className="font-xs ti-youtube text-white" />
                            </span>
                        </li>
                        <li className="me-1">
                            <span className="btn-round-lg pointer bg-flicker">
                                <i className="font-xs ti-flickr text-white" />
                            </span>
                        </li>
                        <li className="me-1">
                            <span className="btn-round-lg pointer bg-black">
                                <i className="font-xs ti-vimeo-alt text-white" />
                            </span>
                        </li>
                        <li>
                            <span className="btn-round-lg pointer bg-whatsup">
                                <i className="font-xs feather-phone text-white" />
                            </span>
                        </li>
                    </ul>
                </div>
                <h4 className="fw-700 font-xssss mt-4 text-grey-500 d-flex align-items-center mb-3">
                    Copy Link
                </h4>
                <i className="feather-copy position-absolute right-35 mt-3 font-xs text-grey-500" />
                <input
                    type="text"
                    placeholder="https://socia.be/1rGxjoJKVF0"
                    className="bg-grey text-grey-500 font-xssss border-0 lh-32 p-2 font-xssss fw-600 rounded-3 w-100 theme-dark-bg"
                />
            </div>
        </div>
    )
}

export default CardFooter