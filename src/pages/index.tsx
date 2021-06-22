import ViewModuleManager from "../components/viewModuleManager/ViewModuleManager";
import styled from "styled-components";
import {ViewModuleManagerProps} from "../components/viewModuleManager/ViewModuleManagerType";
import {LoginMetaProps} from "./loginModule/LoginModule";
import RouterController, {Pages} from "../utilz/router/RouterController";
import initEnvironment from "../environment/Env";
import {useEffect} from "react";
import {HomeModuleMetaProps} from "./homeModule/HomeModule";



function constructBaseUrl(restUrl:string){
    return `/Lno/crypto/${restUrl}`
}

const modulePages:Array<Pages> = [
        {
            path:"/",
            Component:<ViewModuleManager module={LoginMetaProps}/>
        },

        {
            path:"/crypto/",
            Component:<ViewModuleManager module={HomeModuleMetaProps}/>
        },
    ]




export default ()=>{

    return(
        <RouterController pages={modulePages}/>
    )

}