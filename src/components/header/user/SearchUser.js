import React from 'react'
import { Link } from 'react-router-dom'

const SearchUser = () => {
    return (
        <form action="#" class="searchbox">
            <input type="text" class="text search-input" placeholder="Type here to search..." />
            <Link class="search-link" to=''><i class="ri-search-line"></i></Link>

            {/* Khúc này là card user khi search */}
{/*             <div class="iq-card" style={{position: "absolute", width:'100%'}}>
                <div class="iq-card-body p-0">
                    <ul class="todo-task-lists m-0 p-0">
                        <li class="d-flex align-items-center p-3">
                            <div class="user-img img-fluid"><img src="images/user/01.jpg" alt="story-img" class="rounded-circle avatar-40" /></div>
                            <div class="media-support-info ml-3">
                                <h6 class="d-inline-block">Landing page for secret Project</h6>
                            </div>
                        </li>
                        <li class="d-flex align-items-center p-3">
                            <div class="user-img img-fluid"><img src="images/user/02.jpg" alt="story-img" class="rounded-circle avatar-40" /></div>
                            <div class="media-support-info ml-3">
                                <h6 class="d-inline-block">IOS App - Redesign the contact</h6>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> */}
        </form>
    )
}

export default SearchUser