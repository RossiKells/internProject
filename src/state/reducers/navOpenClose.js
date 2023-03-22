export const navopenClose=(state=false,action)=>{
    if(action.type==='navopen'){
        return !state
    }
    else if(action.type==='navclose'){
        return !state
    }
    else{return state}

}