import { combineReducers } from 'redux'
import auth from './authReducer'
import notify from './notifyReducer'
import profile from './profileReducer'


export default combineReducers({
    auth,
    notify,
    profile
})