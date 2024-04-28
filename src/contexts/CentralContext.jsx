import { createContext, useReducer } from "react";
import CentralReducer, { initalCentralState, centralTypes } from "@/stores/CentralReducer"

export const CentralContext = createContext()

export const CentralProvider = ({ children }) => {
    const [ authState, authDispatch ] = useReducer(CentralReducer, initalCentralState)

    const updateAccessToken = (token) => {
        authDispatch({ 
          type: centralTypes.setAccessToken, 
          payload: token
        })
        localStorage.setItem('access-token', token)
      }
    
      const updateRefreshToken = (token) => {
        authDispatch({ 
          type: centralTypes.setRefreshToken, 
          payload: token
        })
        localStorage.setItem('refresh-token', token)
      }
    
      const login = () => {
        authDispatch({
          type: centralTypes.setAuthentication,
          payload: true
        })
      }

      const logout = () => {
        authDispatch({ 
          type: centralTypes.setAccessToken, 
          payload: ''
        })
        authDispatch({ 
          type: centralTypes.setRefreshToken, 
          payload: ''
        })
        localStorage.removeItem('access-token')
        localStorage.removeItem('refresh-token')
        authDispatch({
          type: centralTypes.setAuthentication,
          payload: false
        })
      }

      const centralContext = {
        authState, 
        authTypes: centralTypes,
        authDispatch,
        updateAccessToken,
        updateRefreshToken,
        login,
        logout
    }

    return <CentralContext.Provider value={centralContext}>{ children }</CentralContext.Provider>
}