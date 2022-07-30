import { GLOBALTYPES } from "./globalTypes";
import axios from "axios";
import { showErrMsg, showSuccessMsg } from "../../utils/Notification";
import { postDataAPI } from "../../utils/fetchData";
import valid from "../../utils/Validation";


export const login = (data) => async (dispatch) => {
	try {
		dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
		//const res = await axios.post("api/user/login", data);

		const res = await postDataAPI('/user/login', data)

		localStorage.setItem("firstLogin", true)

		dispatch({
			type: GLOBALTYPES.ALERT,
			payload: {
				success: res.data.msg
			}
		});

		dispatch({
			type: GLOBALTYPES.AUTH,
			payload: {
				token: res.data.data.access_token,
				user: res.data.data.user,
				isAdmin: res.data.data.user.role === "admin" ? true : false,
				isLogin: true,
			},
		});
		showSuccessMsg("success", res.data.msg);
	} catch (err) {
		dispatch({
			type: GLOBALTYPES.ALERT,
			payload: {
				error: err.response.data.msg
			}
		});
		showErrMsg("error", err.response.data.msg);
		console.log("login", err.response.data);
	}
};

export const refreshToken = () => async (dispatch) => {
	try {
		dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
		const firstLogin = localStorage.getItem("firstLogin");

		if (firstLogin) {

			const res = await axios.post("api/user/refresh_token");

			dispatch({
				type: GLOBALTYPES.AUTH,
				payload: {
					token: res.data.data.access_token,
					user: res.data.data.user,
					isAdmin: res.data.data.user.role === "admin" ? true : false,
					isLogin: true,
				},
			});
		}
	} catch (err) {
		dispatch({
			type: GLOBALTYPES.ALERT,
			payload: {
				error: err.response.data.msg
			}
		});
		showErrMsg("error", err.response.data.msg);
		console.log("refreshToken", err.response.data);
	}
};


export const register = (data) => async (dispatch) => {
	const check = valid(data);
	//console.log({check})

	if (check.errLength > 0) {
		check.errMsg.map((err) => {
			showErrMsg("error", err);
		});
	}
	try {
		const res = await axios.post("api/user/register", data);
		showSuccessMsg("success", res.data.msg);
	} catch (err) {
		showErrMsg("error", err.response.data.msg);
		console.log("register", err.response.data);
	}
};

export const logout = () => async (dispatch) => {
	try {
		localStorage.removeItem('firstLogin')
		dispatch({
		  type: GLOBALTYPES.AUTH,
		  payload: {
			token: '',
			user: {},
			isAdmin: '',
			isLogin:false
		  }
		})

		window.location.href = "/"
	} catch (err) {
		showErrMsg("error", err.response.data.msg);
	}
}