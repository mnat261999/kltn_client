import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

function UserAPI(token) {
    const [callbackUser, setCallbackUser] = useState(false)
    const [listUserSearch, setListUserSearch] = useState([])

    return {
        listUserSearch: [listUserSearch, setListUserSearch]
    }
}

export default UserAPI
