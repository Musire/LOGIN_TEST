import { createContext, useEffect, useReducer } from "react";
import CentralReducer, { initalCentralState, centralTypes } from "@/stores/CentralReducer"
import { jwtDecode } from "jwt-decode";
import { useRequest } from "@/hooks"
import { headers } from "@/constants/Forms"

export const CentralContext = createContext()

export const CentralProvider = ({ children }) => {
    const [ authState, authDispatch ] = useReducer(CentralReducer, initalCentralState)
    const { status, error, resData, deleteRequest } = useRequest()

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

      const deleteAccount = async () => {
        const decode = jwtDecode(authState.accessToken)
        console.log(decode)
        
        if (!decode) return 

        await deleteRequest(`${import.meta.env.VITE_BASE_URL_DEV}/delete/?id=${decode.userId}`, headers)
      }


      const centralContext = {
        authState, 
        authTypes: centralTypes,
        authDispatch,
        updateAccessToken,
        updateRefreshToken,
        login,
        logout, 
        deleteAccount
    }

    return <CentralContext.Provider value={centralContext}>{ children }</CentralContext.Provider>
}