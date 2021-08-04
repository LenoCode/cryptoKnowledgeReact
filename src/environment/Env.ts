

export const cryptoEnvironment={
    CRYPTO_REST_URL : "http://localhost:8000",
    ADMIN_USERNAME:"leno",
    ADMIN_PASSWORD:"djanogmojcale321",

    styles:{
        mainColor: "rgb(106,84,146)",
        secondColor:"rgb(93,96,102)",
        thirdColor:"rgb(22,184,174)"
    }
}






export function initEnvironment(){

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        cryptoEnvironment.CRYPTO_REST_URL = "http://localhost:8000"

    } else {

    }
}



