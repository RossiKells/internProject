export const open=()=>{
    return (dispatch)=>{
        dispatch({
            type:"open",
            // payload:val
        })
    }
}

export const close=()=>{
    return (dispatch)=>{
        dispatch({
            type:"close",
            // payload:val
        })
    }
}

