import axios, {AxiosInstance} from 'axios';


type CryptoRest={
    restClient:AxiosInstance
}

console.log("test");

export const cryptoRestClient: CryptoRest={
    restClient:axios.create({
        baseURL:process.env.CRYPTO_REST_URL
    })
}



function createRestCryptoClient(){
    cryptoRestClient.restClient.interceptors.request.use()

}