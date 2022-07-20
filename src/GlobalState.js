import React, {createContext} from 'react'
import { useSelector } from 'react-redux'
import UserAPI from './api/UserAPI'



export const GlobalState = createContext()


export const DataProvider = ({children}) =>{

    const auth = useSelector(state => state.auth)
    const token = auth.token

    const state = {
        token:token,
        userAPI: UserAPI(token)
    } 



    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
