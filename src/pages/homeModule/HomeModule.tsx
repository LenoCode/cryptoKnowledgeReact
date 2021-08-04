import {ModuleMetaProps, ModuleViewControls} from "../../components/viewModuleManager/ViewModuleManagerType";
import {useSelector} from "react-redux";
import {Store} from "../../store/Store";
import {ViewModuleManagerContext} from "../../components/viewModuleManager/ViewModuleManager";
import {useContext, useEffect} from "react";
import {Button, PageHeader, Tag} from "antd";
//PAGES
import styled from "styled-components";
import OverviewPage from "./homePages/overview/OverviewPage";
import VerticalNavigator, {VerticalNavigatorItem} from "../../components/navigator/VerticalNavigator";
import {UserDetails} from "../../store/userReducer/UserReducer";

export interface HomeModuleContextProps{
    test:string
}

const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background:white;
`
const Body=styled.div`
  display: flex;
  height: 99%;
  width: 99%;
  margin: 5px;
  padding:5px;
  overflow: hidden;
`
const DivNavigator = styled.div`
    display: flex;
    width: 250px;
    height: 100%;
`




function setNavigatorItems(props:ModuleViewControls):Array<VerticalNavigatorItem>{
    return [
        {
            name:"Overview",
            onClick:()=>{props.viewControl.changeViewSubPage(OverviewPage)}
        }
    ]
}

const HomeModule = (props:ModuleViewControls)=>{
    // @ts-ignore
    const contextProps:HomeModuleContextProps = useContext(ViewModuleManagerContext);
    const userDetails:UserDetails = useSelector((store:Store)=>{return store.userReducer.userDetails})
    // @ts-ignore
    const children = props.children

    return (
        <Div>
            <DivNavigator>
                <VerticalNavigator items={setNavigatorItems(props)}/>
            </DivNavigator>

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


