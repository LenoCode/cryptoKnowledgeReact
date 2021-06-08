
import {combineReducers} from "redux";
import userReducer, {UserReducerState} from "./userReducer/UserReducer"


export interface Store{
    userReducer:UserReducerState

}


export type Action = {
    type:{
        reducer:string,
        action:Function,
    },
    payload:any
}

// @ts-ignore
const rootReducer: Store = combineReducers({
    userReducer,
});

export default rootReducer;