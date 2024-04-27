export const initalCentralState = {
    accessToken: null,
    refreshToken: null,
    authentication: false
}

export const centralTypes = {
    setAuthentication: "SET_AUTHENTICATION",
    setAccessToken: "SET_ACCESS_TOKEN",
    setRefreshToken: "SET_REFRESH_TOKEN"
}

const CentralReducer = (state, action) => {
    switch (action.type) {
        case "SET_AUTHENTICATION":
            return { ...state, authentication: action.payload }
        case "SET_ACCESS_TOKEN":
            return { ...state, accessToken: action.payload }
        case "SET_REFRESH_TOKEN":
            return { ...state, refreshToken: action.payload }    
        default:
            return state
    }
}
 
export default CentralReducer;
