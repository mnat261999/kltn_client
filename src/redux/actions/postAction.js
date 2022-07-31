import { GLOBALTYPES } from "./globalTypes";
import axios from "axios";
import { showErrMsg, showSuccessMsg } from "../../utils/Notification";

export const createPost = ({content,medias,auth}) => async dispatch => {
    let media = []

    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await axios.post("api/post/create",{content:content,medias:medias},{
            headers: { Authorization: auth.token },
        })
/*         dispatch({ 
            type: GLOBALTYPES.CREATE_POST, 
            payload: {...res.data.data} 
        }) */
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
        console.log("createPost", err.response.data);
    }
}