import {Action} from "../Store";
import {PROCESS_REDUCER_NAME, ProcessReducerState} from "./ProcessReducer";
import {CryptoGetRestProcessHistoryDetailsResponseDto} from "../../utilz/rest/clients/CryptoRestDtos";




export function dispatchActiveProcesses(activeProcesses:Array<CryptoGetRestProcessHistoryDetailsResponseDto>){
    const callbackDispatch = (newState: ProcessReducerState, payload: Array<CryptoGetRestProcessHistoryDetailsResponseDto>) => {
        newState.activeProcesses = [];
        payload.map((value) => {
            newState.activeProcesses.push({
                name: value.name
            })
        });
        return newState;
    };
    return createAction(callbackDispatch,activeProcesses);
}


function createAction(callbackDispatch:Function,payload:any):Action{
    return {
        type:{
            reducer:PROCESS_REDUCER_NAME,
            action:callbackDispatch,
        },
        payload
    }
}