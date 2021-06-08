import ViewModuleManager from "../components/viewModuleManager/ViewModuleManager";
import styled from "styled-components";
import {ViewModuleManagerProps} from "../components/viewModuleManager/ViewModuleManagerType";
import {LoginMetaProps} from "./loginModule/LoginModule";
import RouterController, {Pages} from "../utilz/router/RouterController";
import initEnvironment from "../environment/Env";
import {useEffect} from "react";


const Div = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`


function constructBaseUrl(restUrl:string){
    return `/Lno/crypto/${restUrl}`
}

const modulePages:Array<Pages> = [
        {
            path:constructBaseUrl("loginModule"),
            Component:<ViewModuleManager module={LoginMetaProps}/>
        }
    ]




export default ()=>{

    useEffect(()=>{
        initEnvironment()
    },[])

    return(
        <RouterController pages={modulePages}/>
    )

}