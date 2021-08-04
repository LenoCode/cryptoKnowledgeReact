import {Action} from "../Store";
import {ASSET_REDUCER_NAME, AssetReducerState} from "./AssetReducer";
import {
    CryptoGetRestCryptoAssetsResponseDto,
} from "../../utilz/rest/clients/CryptoRestDtos";



export function dispatchCryptoAssets(cryptoAssets:CryptoGetRestCryptoAssetsResponseDto){

    const callbackDispatch = (newState: AssetReducerState, payload: CryptoGetRestCryptoAssetsResponseDto) => {
        newState.cryptoCurrencies.totalValueInBtc = payload.totalAssetOfBtc;
        newState.cryptoCurrencies.assets = payload.balances;

        newState.cryptoCurrencies.assets.map(((value, index) => {
            // @ts-ignore
            value.key = index;
        }))
        return newState;
    };
    return createAction(callbackDispatch,cryptoAssets);
}


function createAction(callbackDispatch:Function,payload:any):Action{
    return {
        type:{
            reducer:ASSET_REDUCER_NAME,
            action:callbackDispatch,
        },
        payload
    }
}