import axios from "axios";
import { GLOBALTYPES } from "./globalTypes";


export const getProfileUsers =
  ({ users, id, auth }) =>
  async (dispatch) => {
    if (users.every((user) => user._id !== id)) {
      try {
        dispatch({ type: PROFILE_TYPES.LOADING_PROFILE, payload: true });
        const res = await axios.get(`api/user/infor/${id}`, {
          headers: { Authorization: auth.token },
        });

        const users = await res;
        console.log(users);
        dispatch({
          type: PROFILE_TYPES.GET_USER,
          payload: users.data,
        });

        dispatch({ type: PROFILE_TYPES.LOADING_PROFILE, payload: false });
      } catch (err) {
        dispatch({
          type: GLOBALTYPES.ALERT,
          payload: { error: err.response.data.msg },
        });
      }
    }
  };
