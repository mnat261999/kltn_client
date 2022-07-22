import { GLOBALTYPES } from "../actions/globalTypes"

const initialState = {
    loading: false,
    user: '',
    posts: []
}

const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GLOBALTYPES.LOADING_PROFILE:
            return {
                ...state,
                loading: action.payload
            };
        case GLOBALTYPES.GET_USER:
            console.log(action.payload)
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;  
    }
}

export default profileReducer