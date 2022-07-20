import { GLOBALTYPES } from "../actions/globalTypes"

const initialState = {
    loading: false,
    users: [],
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
            return {
                ...state,
                users: [...state.users, action.payload.user]
            };
        default:
            return state;  
    }
}

export default profileReducer