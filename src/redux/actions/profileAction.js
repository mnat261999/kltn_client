import axios from "axios";
import { showErrMsg } from "../../utils/Notification";
import { GLOBALTYPES } from "./globalTypes";


export const getProfileUsers = ({ id, auth }) =>async dispatch => {
    if (id === auth.user._id) {
        try {
            dispatch({type: GLOBALTYPES.LOADING_PROFILE, payload: true})
            const res = await axios.get("api/user/login/infor",{
                headers: { Authorization: auth.token },
            })

            console.log({res})

            dispatch({
                type: GLOBALTYPES.GET_USER,
                payload: res.data.data
            })
            dispatch({type: GLOBALTYPES.LOADING_PROFILE, payload: false})
        } catch (err) {
            showErrMsg("error", err.response.data.msg);
            console.log("getProfileUsers", err.response.data);
        }
    }else {
        try {
            dispatch({type: GLOBALTYPES.LOADING_PROFILE, payload: true})
            const res = await axios.get(`api/user/infor/${id}`,{
                headers: { Authorization: auth.token },
            })

            console.log({res})

            dispatch({
                type: GLOBALTYPES.GET_USER,
                payload: res.data.data[0]
            })
            dispatch({type: GLOBALTYPES.LOADING_PROFILE, payload: false})
        } catch (err) {
            showErrMsg("error", err.response.data.msg);
            console.log("getProfileUsers", err.response.data);
        }
    }
}