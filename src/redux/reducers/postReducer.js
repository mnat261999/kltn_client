import { GLOBALTYPES } from "../actions/globalTypes"

const initialState = {
    post: []
}

const postReducer = (state = initialState, action)=> {
    switch(action.type){
        case GLOBALTYPES.CREATE_POST:
            return{
                ...state,
                posts:[...state.posts, action.payload]
            };
        default:
            return state;
    }
}

export default postReducer