export const openClose=(state=false,action)=>{
    console.log(action.type);
    if(action.type ==="open"){
        return !state
    }
    else  {
        return  !state
    }
    

}


