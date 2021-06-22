import {ModuleMetaProps, ModuleViewControls} from "../../components/viewModuleManager/ViewModuleManagerType";
import {useSelector} from "react-redux";
import {Store} from "../../store/Store";
import {ViewModuleManagerContext} from "../../components/viewModuleManager/ViewModuleManager";
import {useContext, useEffect} from "react";
import {Button, PageHeader, Tag} from "antd";
//PAGES
import styled from "styled-components";
import OverviewPage from "./homePages/overview/OverviewPage";

export interface HomeModuleContextProps{
    test:string
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  background: #1890ff;
  margin:1px;
`
const Name = styled.p`
  margin: 1px;
  font-size: 22px;
  color: white;
`;
const Body=styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
`

const HomeModule = (props:ModuleViewControls)=>{
    // @ts-ignore
    const contextProps:HomeModuleContextProps = useContext(ViewModuleManagerContext);

    // @ts-ignore
    const children = props.children
    return (
        <Div>
            <Header>
                <Name>Home</Name>
            </Header>
            <Body>
                {children}
            </Body>
        </Div>
    );
}


export const HomeModuleMetaProps:ModuleMetaProps<HomeModuleContextProps>={
    name:"Home",
    MainComponent:HomeModule,
    Component:OverviewPage,
    contextValues:{
        test:"dasda"
    }

}


