import { POST_TYPES } from '../actions/postAction'
import { EditData, DeleteData, GLOBALTYPES } from '../actions/globalTypes'

const initialState = {
    loading: false,
    posts: [],
    result: 0,
    page: 2
}

const postReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type){
        case GLOBALTYPES.CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
                result: action.result
            };
        case GLOBALTYPES.GET_POSTS:
            return {
                ...state,
                posts: action.payload.data,
                result: action.payload.total
            }
        default:
            return state;
    }
}

export default postReducer