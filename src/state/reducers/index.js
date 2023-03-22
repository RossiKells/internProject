import { combineReducers } from "redux";
import {openClose} from "./openClose"
import { navopenClose } from "./navOpenClose";


const reducer=combineReducers({
    val:openClose,
    val2:navopenClose
})

export default reducer;