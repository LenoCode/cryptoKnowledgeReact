import {ModuleViewControls, ViewModuleManagerProps} from "./ViewModuleManagerType";
import React, {Component, useEffect, useState,useContext} from "react";



function createModuleViewControls(setComponentState:Function): ModuleViewControls {
    const moduleViewControls:ModuleViewControls = {
        viewControl:{
            changeViewSubPage:()=>{},
        }
    }
    // @ts-ignore
    moduleViewControls.viewControl.changeViewSubPage = (Component: React.FunctionComponent<ModuleViewControls>) => {
        setComponentState(<Component viewControl={moduleViewControls.viewControl}/>)
    }
    return moduleViewControls
}


export const ViewModuleManagerContext = React.createContext({})

// eslint-disable-next-line import/no-anonymous-default-export
export default (props:ViewModuleManagerProps)=>{
    const [moduleState,setModuleState] = useState(props.module.contextValues);
    const [component, setComponent] = useState(null);
    const moduleViewControl:ModuleViewControls = createModuleViewControls(setComponent);

    useEffect(() => {
        // @ts-ignore
        setComponent(<props.module.Component viewControl={moduleViewControl.viewControl}/>);
    }, []);

    useEffect(() => {
        // @ts-ignore
        setComponent(<props.module.Component viewControl={moduleViewControl.viewControl}/>);
        setModuleState(props.module.contextValues)
    }, [props.module.name]);

    return (
        <ViewModuleManagerContext.Provider value={moduleState}>
            <props.module.MainComponent viewControl={moduleViewControl.viewControl}>
                {component}
            </props.module.MainComponent>
        </ViewModuleManagerContext.Provider>
    );
}