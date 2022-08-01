import axios from "axios";
import { imageUpload } from "../../utils/imageUpload";
import { showErrMsg } from "../../utils/Notification";
import { GLOBALTYPES } from "./globalTypes";

export const getProfileUsers = ({ id, auth }) =>async dispatch => {
    if (id === auth.user._id) {
        try {
            dispatch({type: GLOBALTYPES.LOADING_PROFILE, payload: true})
            const res = await axios.get("api/user/login/infor",{
                headers: { Authorization: auth.token },
            })

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

export const updateProfileUser = ({userData, avatar, auth}) => async (dispatch) => {
    try {
        let media;
        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})

        if(avatar) media = await imageUpload(auth, [avatar])

        // const res = await axios.patch("api/user/update",{
        //     headers: { Authorization: auth.token },
        //     body: userData
        // })
       

        // dispatch({
        //     type: GLOBALTYPES.AUTH,
        //     payload: {
        //         ...auth,
        //         user: {
        //             ...auth.user, ...userData,
        //             avatar: avatar ? media[0].url : auth.user.avatar,
        //         }
        //     }
        // })

        // dispatch({type: GLOBALTYPES.ALERT, payload: {success: res.data.msg}})
        //showErrMsg("success", res.data.msg);

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT, 
            payload: {error: err.response.data.msg}
        })
        showErrMsg("error", err.response.data.msg);
    }

    
}

