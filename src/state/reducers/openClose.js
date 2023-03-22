export const openClose=(state=false,action)=>{
    if(action.type==='open'){
        return !state
    }
    else if(action.type==='close'){
        return !state
    }
    else{return state}

}