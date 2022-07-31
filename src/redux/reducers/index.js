import { combineReducers } from 'redux'
import auth from './authReducer'
import notify from './notifyReducer'
import profile from './profileReducer'
import status from './statusReducer'


export default combineReducers({
    auth,
    notify,
    profile,
    status
})