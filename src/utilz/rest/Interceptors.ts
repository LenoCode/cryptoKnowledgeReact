import { AxiosRequestConfig } from 'axios';

export const requestInterceptor = (config:AxiosRequestConfig)=>{
    const toxenExists = localStorage.getItem("crypto_$@_token");

    if(toxenExists){
        config.headers.Authorization=""
    }

}