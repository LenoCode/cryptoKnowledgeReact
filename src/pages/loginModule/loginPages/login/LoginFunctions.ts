import {CryptoRestClient} from "../../../../utilz/rest/clients/CryptoRest";
import {constants} from "http2";
import {Dispatch} from "redux";
import {dispatchNewUserDetails} from "../../../../store/userReducer/UserDispatchFunctions";
import {
    CryptoGetRestUserDetailsResponseDto,
    CryptoPostRestLoginResponseDto
} from "../../../../utilz/rest/clients/CryptoRestDtos";


/*** Check for existence of token
 *
 */
export function checkForToken():boolean{
    return localStorage.getItem("Token") !== null
}


/***
 * Get user details and modules
 */
export function getUserDetailsFromToken(dispatch: Dispatch, history:any){
    const token:string|null = localStorage.getItem("Token")
    const params={
        token,
    }
    const response = (response:CryptoGetRestUserDetailsResponseDto)=>{
        dispatch(dispatchNewUserDetails(response, token));
        if(token != null){
            CryptoRestClient.setToken(token)
        }
        history.push("/crypto/");
    }

    const err = (err:any)=>{
        console.log(err,"imamo error");
    }
    CryptoRestClient.getEndPoints().getUserDetailsFromToken.get(response,err, params);
}

/***
 * Initialization of rest client,preparing to see if rest client is valid
 *
 * credentials : username - leno
 *               password - djangomojcale321
 */
export function onClickLogin(username:string,password:string,setLoginClicked:Function) {
    const credentials = {
        username:username,
        password:password
    }

    const response = (response:CryptoPostRestLoginResponseDto)=> {
        CryptoRestClient.setToken(response.token);
        localStorage.setItem("Token", response.token);
        setLoginClicked()
        }

    const err = (err:any)=>{
        console.log("Bad request");
    }
    CryptoRestClient.getEndPoints().login.post(response,err,credentials);

}