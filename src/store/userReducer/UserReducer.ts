/**
 * Initial state - reducer
 */
import {Action} from "../Store";


export const USER_REDUCER_NAME = "UserReducer";

export type LoginStatusType={
    loginStatus:boolean,
    username:string,
    authorities:[],
    token:string,
}

export type UserReducerState = {
    loginStatus:LoginStatusType
}



const initialState :UserReducerState={
    loginStatus:{
        loginStatus:false,
        username:"",
        authorities:[],
        token:"",
    }
};

/***
 * Returns deep copied object using spread
 * @param state
 */
function getCopiedObject(state:UserReducerState){
    return {...state,loginStatus: {...state.loginStatus}}
}

/**
 * Main function for redux to call and change state.
 * Action object consists of type and payload, but here type is not a string, but a function that is called, that
 * way we are not using switch and continuously keep adding more cases, with this we just add new function and we never touch
 * this function again
 *
 * @param state
 * @param action
 */
export default function (state: UserReducerState = initialState, action: Action): any {
    if (typeof action.type != 'string' && action.type.reducer === USER_REDUCER_NAME) {
        const newState = getCopiedObject(state);
        action.type.action(newState,action.payload);
        return newState;
    } else {
        return state;
    }
};