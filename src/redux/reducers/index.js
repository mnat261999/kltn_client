import { combineReducers } from 'redux'
import auth from './authReducer'
import notify from './notifyReducer'
import profile from './profileReducer'
import status from './statusReducer'
import homePost from './postReducer'


export default combineReducers({
    auth,
    notify,
    profile,
    status,
    homePost
})