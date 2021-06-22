import {USER_REDUCER_NAME, UserReducerState} from "./UserReducer";
import {Action} from "../Store";
import {CryptoRestUserDetailsDto} from "../../utilz/rest/clients/CryptoRestDtos";




export function dispatchNewUserDetails(userDetails:CryptoRestUserDetailsDto,token:string|null){

    const callbackDispatch = (newState:UserReducerState,payload:any)=>{
        if(!newState.initialized){
            console.log("Initializing to truth");
            newState.initialized = true;
        }

        newState.userDetails.loginStatus = payload.loginStatus;
        newState.userDetails.superUser = payload.superUser;
        newState.userDetails.username = payload.username;
        newState.userDetails.modules = payload.modules
        newState.userDetails.token = payload.token
        return newState
    }

    return createAction(callbackDispatch,{
        loginStatus:true,
        username:userDetails.name,
        superUser:userDetails.superUser,
        modules:userDetails.modules,
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



