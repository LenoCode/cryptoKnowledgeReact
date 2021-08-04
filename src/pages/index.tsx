import ViewModuleManager from "../components/viewModuleManager/ViewModuleManager";
import {LoginMetaProps} from "./loginModule/LoginModule";
import RouterController, {Pages} from "../utilz/router/RouterController";
import {HomeModuleMetaProps} from "./homeModule/HomeModule";
import {AdministrationModuleProps} from "./administrationModule/AdministrationModule";
import {BotModuleProps} from "./botModule/BotModule";




const modulePages:Array<Pages> = [
        {
            path:"/",
            Component:<ViewModuleManager module={LoginMetaProps}/>
        },

        {
            path:"/crypto/",
            Component:<ViewModuleManager module={HomeModuleMetaProps}/>
        },
        {
            path:"/crypto/administration/",
            Component:<ViewModuleManager module={AdministrationModuleProps}/>
        },
        {
            path:"/crypto/bot",
            Component:<ViewModuleManager module={BotModuleProps}/>
        }
    ]




export default ()=>{

    return(
        <RouterController pages={modulePages}/>
    )

}