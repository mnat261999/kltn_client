import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { showErrMsg } from '../../utils/Notification'
import CardUser from './CardUser'

const Search = () => {

    const auth = useSelector(state => state.auth)
    const [search, setSearch] = useState('')
    const [listUserSearch, setListUserSearch] = useState([])
    const history = useHistory();


    useEffect(() => {
        if (search.length != 0 && auth.token) {
            const getUserList = async () => {
                try {
                    const res = await axios.get(`api/user/search_user?keyword=${search}`, {
                        headers: { Authorization: auth.token },
                    })

                    console.log(res.data.data)

                    setListUserSearch(res.data.data)
                } catch (err) {
                    showErrMsg("error", err.response.data.msg);
                    console.log("getUserList", err.response.data);
                }
            }
            getUserList()
        } else if (search.length == 0 && auth.token) {
            setListUserSearch([])
        }
    }, [search, auth.token, showErrMsg])

    return (
        <form action="#" className="float-left header-search ms-3">
            <div className="form-group mb-0 icon-input">
                <i className="feather-search font-sm text-grey-400" style={{ top: '14px' }}></i>
                <input type="text" name="search" value={search}  id="search"
                    onChange={e => setSearch(e.target.value.toLowerCase().replace(/ /g, ''))}
                    placeholder="Search..."
                    className="bg-grey border-0 lh-32 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl w350 theme-dark-bg"
                    autoComplete="off"
                />

                <div className="users" style={{position:'absolute', top:'50px' , width:'100%', background:'white'}}>
                    {
                        search.length != 0 && listUserSearch.map(user => (
                            <CardUser user={user} border="border" onClick={() => {
                                history.push(`/profile/${user._id}`);
                                setSearch('');
                            }} />
                        ))
                    }
                </div>
            </div>
        </form>
    )
}

export default Search