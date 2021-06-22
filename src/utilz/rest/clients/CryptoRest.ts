import axios, {AxiosInstance} from 'axios';
import {EndPoints, HttpClient} from '../Client';
import {Environment} from "../../../environment/Env";


export interface RestMethod {
    get:(callback:Function,params:Object)=>void
    post:(callback:Function,json:object)=>void
}

export interface CryptoRestEndPoints {
    login: RestMethod
    getUserDetailsFromToken:RestMethod
}



const endPoints:EndPoints = {
    urls:[
        {
            name:"login",
            path:"api-token-auth/"
        },
        {
            name:"getUserDetailsFromToken",
            path:"rest/accountInformation/getUserDetails"
        }
    ]
}


// @ts-ignore
export const CryptoRestClient:HttpClient<CryptoRestEndPoints> = new HttpClient<CryptoRestEndPoints>("cryptoRestClient", Environment.CRYPTO_REST_URL,endPoints)