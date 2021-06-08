import {USER_REDUCER_NAME, UserReducerState} from "./UserReducer";
import {Action} from "../Store";


export function changeLoginStatus(loginStatus:boolean,username:string,authorities:[],token:string){

    const callbackDispatch = (newState:UserReducerState,payload:any)=>{
        newState.loginStatus.loginStatus = payload.loginStatus;
        newState.loginStatus.authorities = payload.authorities;
        newState.loginStatus.username = payload.username;
        newState.loginStatus.token = payload.token
        return newState
    }

    return createAction(callbackDispatch,{
        loginStatus,
        username,
        authorities,
        token
    })

}


function createAction(callbackDispatch:Function,payload:any):Action{
    return {
        type:{
            reducer:USER_REDUCER_NAME,
            action:callbackDispatch,
        },
        payload
    }
}



