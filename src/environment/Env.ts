

export const Environment={
    CRYPTO_REST_URL : "http://localhost:8000",
    ADMIN_USERNAME:"leno",
    ADMIN_PASSWORD:"djanogmojcale321"

}






function initEnvironment(){

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        Environment.CRYPTO_REST_URL = "http://localhost:8000"

    } else {

    }
}


export default initEnvironment;

