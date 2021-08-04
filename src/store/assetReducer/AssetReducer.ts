/**
 * Initial state - reducer
 */
import {Action} from "../Store";


export const ASSET_REDUCER_NAME = "AssetReducer";


export interface CryptoCurrenciesAssets {
    totalValueInBtc:Number,
    assets:Array<{
        asset:string,
        free:Number,
        locked:Number,
    }>
}

export interface AssetReducerState {
    cryptoCurrencies:CryptoCurrenciesAssets,
}


const initialState: AssetReducerState = {
    cryptoCurrencies:{
        totalValueInBtc:0,
        assets:[]
    }
};

/***
 * Returns deep copied object using spread
 * @param state
 */
function getCopiedObject(state: AssetReducerState) {
    return {
        ...state,cryptoCurrencies:{
            ...state.cryptoCurrencies,assets: [...state.cryptoCurrencies.assets]
        }
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
export default function (state: AssetReducerState = initialState, action: Action): any {
    if (typeof action.type !== 'string' && action.type.reducer === ASSET_REDUCER_NAME) {
        const newState = getCopiedObject(state);
        action.type.action(newState,action.payload);
        return newState;
    } else {
        return state;
    }
};