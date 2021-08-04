import {ModuleMetaProps, ModuleViewControls} from "../../components/viewModuleManager/ViewModuleManagerType";
import {useContext} from "react";
import {ViewModuleManagerContext} from "../../components/viewModuleManager/ViewModuleManager";
import styled from "styled-components";
import OverviewPage from "./adminPages/overview/OverviewPage";


const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: white;
`

const Body=styled.div`
  display: flex;
  flex-direction: column;
  height: 99%;
  width: 99%;
  margin: 5px;
  padding:5px;
  overflow: hidden;
`


export interface AdministrationModuleContextProps{
    test:string
}

const AdministrationModule = (props:ModuleViewControls)=>{
    // @ts-ignore
    const contextProps:AdministrationModuleContextProps = useContext(ViewModuleManagerContext);
    // @ts-ignore
    const children = props.children;

    return (
        <Div>
            <Body>
                {children}
            </Body>
        </Div>
    );
}


export const AdministrationModuleProps:ModuleMetaProps<AdministrationModuleContextProps>={
    name:"Administration",
    MainComponent:AdministrationModule,
    Component:OverviewPage,
    contextValues:{
        test:"dasda"
    }

}