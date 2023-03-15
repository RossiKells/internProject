export const open=(val)=>{
    return (dispatch)=>{
        dispatch({
            type:"open",
            // payload:val

        })
    }

}


export const close=(val)=>{
    return (dispatch)=>{
        dispatch({
            type:"close",
            // payload:val

        })
    }

}