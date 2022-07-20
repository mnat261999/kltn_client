import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { GlobalState } from "../../../GlobalState";
import { showErrMsg } from "../../../utils/Notification";
import CardUser from "./CardUser";


const SearchUser = () => {
    const state = useContext(GlobalState)
    const auth = useSelector(state => state.auth)
    const [search, setSearch] = useState('')
    const [listUserSearch, setListUserSearch] = state.userAPI.listUserSearch


    useEffect(() => {
        console.log(search.length)
        if (search.length != 0 && auth.token) {
            const getUserList = async () => {
                await axios.get(`api/user/search_user?keyword=${search}`, {
                    headers: { Authorization: auth.token },
                }).then(res => setListUserSearch(res.data.data))
                    .catch(err => showErrMsg("error", err.response.data.msg))
            }
            getUserList()
            console.log({ listUserSearch })
        } else if (search.length == 0 && auth.token) {
            setListUserSearch([])
        }
    }, [search, auth.token, showErrMsg])

    return (
        <form action="#" className="float-left header-search ms-3">
            <div className="form-group mb-0 icon-input">
                <i className="feather-search font-sm text-grey-400"></i>
                <input type="text" name="search" value={search} id="search"
                    onChange={e => setSearch(e.target.value.toLowerCase().replace(/ /g, ''))}
                    placeholder="Start typing to search.."
                    className="bg-grey border-0 lh-32 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl w350 theme-dark-bg" />

                <div className="users">
                    {
                        search.length != 0 && listUserSearch.map(user => (
                            <Link key={user._id} to={`profile/${user._id}`}>
                                <CardUser user={user} border="border" />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </form>
    );
};

export default SearchUser;
