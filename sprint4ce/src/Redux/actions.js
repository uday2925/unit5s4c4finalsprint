// action types
export const login="login"

// Action Creators

export const loggedin=(data)=>{
    return {
        type:login,
        payload:data
    }
}


