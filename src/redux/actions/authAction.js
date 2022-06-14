import { GLOBALTYPES } from "./globalTypes";
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from "../../utils/Notification";
import valid from "../../utils/Validation";

export const login = (data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await axios.post('api/user/login', data)

        //if (res.status != 200) return showErrMsg('error', res.data.msg)

        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                token: res.data.data.access_token,
                user: res.data.data.user,
                isAdmin: res.data.data.user.role === "admin" ? true : false,
                isLogin: true
            }
        })

        localStorage.setItem("firstLogin", true)

        showSuccessMsg('success',res.data.msg)

    } catch (err) {
        showErrMsg('error', err.response.data.msg)
        console.log('login',err.response.data);
    }
}

export const register = (data) => async (dispatch) =>{
    const check = valid(data)
    //console.log({check})

    if(check.errLength > 0){
        check.errMsg.map( err => {
            showErrMsg('error', err)
        })
    }
    try {
        const res = await axios.post('api/user/register', data)
        showSuccessMsg('success',res.data.msg)
    } catch (err) {
        showErrMsg('error', err.response.data.msg)
        console.log('register',err.response.data);
    }
}