import { GLOBALTYPES } from "./globalTypes";
import axios from "axios";
import { showErrMsg, showSuccessMsg } from "../../utils/Notification";

export const createPost = ({content,medias,auth}) => async dispatch => {
    let media = []
    console.log(content)

    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await axios.post("api/post/create",{content:content,medias:medias},{
            headers: { Authorization: auth.token },
        })
        console.log(res.data.newPost[0])
        const result = await axios.get("api/post/newfeed",{
            headers: { Authorization: auth.token },
        })

        console.log(result)
        dispatch({ 
            type: GLOBALTYPES.CREATE_POST, 
            payload: res.data.newPost[0],
            result: result.data.total
        })
        if(res.data.success == true){
            return showSuccessMsg("success", 'Create success!');
        }
    } catch (err) {
/*         dispatch({
			type: GLOBALTYPES.ALERT,
			payload: {
				error: err.response.data.msg
			}
		});
		showErrMsg("error", err.response.data.msg); */
        console.log("createPost", err);
    }
}

export const updatePost = ({content,medias,auth,mediaIdDeleteList,status}) => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING_POST, payload: { loading: true } })
        const res = await axios.patch(`api/post/${status._id}`,{content:content,medias:medias,mediaIdDeleteList:mediaIdDeleteList},{
            headers: { Authorization: auth.token },
        })
        dispatch(getPosts(auth.token))
        dispatch({ type: GLOBALTYPES.LOADING_POST, payload: { success: res.data.msg } })
        showSuccessMsg("success", ' Update success!');
    } catch (err) {
        showErrMsg("error", err.response.data.msg);
        console.log("updatePost", err);
    }
}

export const getPosts = (token) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING_POST, payload: { loading: true } })

        const res = await axios.get("api/post/newfeed",{
            headers: { Authorization: token },
        })
        console.log(res)
        dispatch({ 
            type: GLOBALTYPES.GET_POSTS, 
            payload: res.data
        })
        dispatch({ type: GLOBALTYPES.LOADING_POST, payload: { loading: false } })
    } catch (err) {
        showErrMsg("error", err.response.data.msg);
        console.log("getPosts", err);
    }
}