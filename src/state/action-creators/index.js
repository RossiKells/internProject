export const open=()=>{
    return(dispatch)=>{
        dispatch({
            type:"open"
        })
    }
}

export const close=()=>{
    return(dispatch)=>{
        dispatch({
            type:"close"
        })
    }
}


export const navOpen=()=>{
    return(dispatch)=>{
        dispatch({
            type:"navopen"
        })
    }
}

export const navClose=()=>{
    return(dispatch)=>{
        dispatch({
            type:"navclose"
        })
    }
}