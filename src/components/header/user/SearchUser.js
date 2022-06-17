import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GLOBALTYPES } from "../../../redux/actions/globalTypes";
import axios from "axios";

const SearchUser = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if(users.length === 0) {
      try {
        setLoad(true);
        const res = await axios.get("api/user/search_user", {
          headers: { Authorization: auth.token },
        });
        setUsers(res.data.data);
        setLoad(false);
      } catch (err) {
        dispatch({
          type: GLOBALTYPES.ALERT,
          payload: { error: err.response.data.msg },
        });
      }
    }
    else{
      setSearch("");
      setUsers([]);
    }
    
    }
    

  const handleClose = () => {
    setSearch("");
    setUsers([]);
  };

  return (
    <form action="#" class="searchbox">
      <input
        type="text"
        class="text search-input"
        placeholder="Type here to search..."
      />
      <Link class="search-link" to="" onClick={handleSearch}>
        <i class="ri-search-line"></i>
      </Link>

      {/* Khúc này là card user khi search */}
      <div class="iq-card" style={{ position: "absolute", width: "100%" }}>
        <div class="iq-card-body p-0">
          <ul class="todo-task-lists m-0 p-0">
            {users.map((user) => (
              <Link to={`/profile/${user._id}`} onClick={handleClose}>
                <li class="d-flex align-items-center p-3">
                  <div class="user-img img-fluid">
                    <img
                      src={user.avatar.url}
                      alt={user.avatar.key}
                      class="rounded-circle avatar-40"
                    />
                  </div>
                  <div class="media-support-info ml-3">
                    <h6 class="d-inline-block">
                      {user.username} - {user.fullname}
                    </h6>
                  </div>
                </li>
              </Link>
            ))}

            {/* <li class="d-flex align-items-center p-3">
              <div class="user-img img-fluid">
                <img
                  src="images/user/02.jpg"
                  alt="story-img"
                  class="rounded-circle avatar-40"
                />
              </div>
              <div class="media-support-info ml-3">
                <h6 class="d-inline-block">IOS App - Redesign the contact</h6>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </form>
  );
};

export default SearchUser;
