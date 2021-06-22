import {ModuleViewControls} from "../../../../components/viewModuleManager/ViewModuleManagerType";
import {LoginModuleContextProps} from "../../LoginModule";
import {useContext} from "react";
import {ViewModuleManagerContext} from "../../../../components/viewModuleManager/ViewModuleManager";
import {findAllByDisplayValue} from "@testing-library/react";


export default (props:ModuleViewControls)=>{
    // @ts-ignore
    const contextProps: LoginModuleContextProps = useContext(ViewModuleManagerContext);

    return (
        <div>
            <p>{contextProps.test}</p>
            <p>REGISTER</p>
        </div>
    );
}


