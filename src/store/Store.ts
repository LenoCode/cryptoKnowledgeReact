
import {combineReducers} from "redux";
import userReducer, {UserReducerState} from "./userReducer/UserReducer"
import processReducer, {ProcessReducerState} from "./processReducer/ProcessReducer"
import assetReducer, {AssetReducerState} from "./assetReducer/AssetReducer";


export interface Store{
    userReducer:UserReducerState,
    processReducer:ProcessReducerState
    assetReducer:AssetReducerState,

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
    processReducer,
    assetReducer
});

export default rootReducer;