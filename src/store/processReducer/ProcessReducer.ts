/**
 * Initial state - reducer
 */
import {Action} from "../Store";


export const PROCESS_REDUCER_NAME = "ProcessReducer";


export interface ActiveProcess {
    name:string
}

export interface ProcessReducerState  {
    activeProcesses : Array<ActiveProcess>
}


const initialState: ProcessReducerState = {
    activeProcesses:[]
};

/***
 * Returns deep copied object using spread
 * @param state
 */
function getCopiedObject(state:ProcessReducerState){
    return {
        ...state,activeProcesses:[...state.activeProcesses],
    }
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
export default function (state: ProcessReducerState = initialState, action: Action): any {
    if (typeof action.type !== 'string' && action.type.reducer === PROCESS_REDUCER_NAME) {
        const newState = getCopiedObject(state);
        action.type.action(newState,action.payload);
        return newState;
    } else {
        return state;
    }
};