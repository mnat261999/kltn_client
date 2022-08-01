import { POST_TYPES } from '../actions/postAction'
import { EditData, DeleteData, GLOBALTYPES } from '../actions/globalTypes'

const initialState = {
    loading: false,

}

const postReducer = (state = initialState, action) => {
    switch (action.type){
        case GLOBALTYPES.MODAL:
            return {
                ...state,
                posts: [...state.posts, action.payload],
                result: action.result
            };

        default:
            return state;
    }
}

export default postReducer