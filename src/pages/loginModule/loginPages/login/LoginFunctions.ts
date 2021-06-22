import {CryptoRestClient} from "../../../../utilz/rest/clients/CryptoRest";
import {constants} from "http2";
import {Dispatch} from "redux";
import {dispatchNewUserDetails} from "../../../../store/userReducer/UserDispatchFunctions";
import {CryptoRestUserDetailsDto} from "../../../../utilz/rest/clients/CryptoRestDtos";


/*** Check for existence of token
 *
 */
export function checkForToken():boolean{
    return localStorage.getItem("Token") !== undefined
}


/***
 * Get user details and modules
 */
export function getUserDetailsFromToken(dispatch: Dispatch, history:any){
    const token:string|null = localStorage.getItem("Token")
    const params={
        token,
    }
    CryptoRestClient.getEndPoints().getUserDetailsFromToken.get((response: any) => {
        const data: CryptoRestUserDetailsDto = response.data;
        dispatch(dispatchNewUserDetails(data,token));
        history.push("/crypto/");
    }, params);
}

/***
 * Initialization of rest client,preparing to see if rest client is valid
 *
 * credentials : username - leno
 *               password - djangomojcale321
 */
export function onClickLogin(username:string,password:string) {
    const credentials = {
        username:username,
        password:password
    }
    // @ts-ignore
    CryptoRestClient.getEndPoints().login.post((response) => {
        if (response.status == 200) {
            CryptoRestClient.setToken(response.data.token);
            localStorage.setItem("Token", response.data.token)
        }
    }, credentials);
}