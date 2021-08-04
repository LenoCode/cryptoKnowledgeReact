import axios, {AxiosInstance} from 'axios';
import {EndPoints, HttpClient} from '../Client';
import {cryptoEnvironment} from "../../../environment/Env";
import {
    CryptoGetRestCryptoAssetsResponseDto,
    CryptoGetRestProcessHistoryDetailsResponseDto,
    CryptoGetRestUserDetailsResponseDto,
    CryptoPostRestLoginResponseDto
} from "./CryptoRestDtos";


export interface RestMethod<GETDTO,POSTDTO> {
    get:(callback:(response:GETDTO)=>void,errorCallback:Function,params:Object)=>void
    post:(callback:(response:POSTDTO)=>void,errorCallback:Function,json:object)=>void
}

export interface CryptoRestEndPoints {
    login: RestMethod<void,CryptoPostRestLoginResponseDto>
    getUserDetailsFromToken:RestMethod<CryptoGetRestUserDetailsResponseDto,void>,
    getProcessHistory:RestMethod<Array<CryptoGetRestProcessHistoryDetailsResponseDto>,void>
    getCryptoAssets:RestMethod<CryptoGetRestCryptoAssetsResponseDto,void>
}



const endPoints:EndPoints = {
    urls:[
        {
            name:"login",
            path:"api-token-auth/",
        },
        {
            name:"getUserDetailsFromToken",
            path:"rest/accountInformation/getUserDetails/",
        },
        {
            name:"getProcessHistory",
            path:"rest/processes/listProcessDetails/",
        },
        {
            name:"getCryptoAssets",
            path:"rest/myAssets/cryptoAssets/"
        }
    ]
}


// @ts-ignore
export const CryptoRestClient:HttpClient<CryptoRestEndPoints> = new HttpClient<CryptoRestEndPoints>("cryptoRestClient", cryptoEnvironment.CRYPTO_REST_URL,endPoints)