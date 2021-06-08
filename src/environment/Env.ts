// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CRYPTO_REST_URL:string = "cryptoRestUrl";



function initEnvironment(){
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        process.env[CRYPTO_REST_URL] = "http://localhost:8000";
    } else {

    }
}


export default initEnvironment;

