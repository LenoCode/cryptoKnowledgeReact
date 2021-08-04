import {ModuleMetaProps, ModuleViewControls} from "../../components/viewModuleManager/ViewModuleManagerType";
import {useSelector} from "react-redux";
import {Store} from "../../store/Store";
import {ViewModuleManagerContext} from "../../components/viewModuleManager/ViewModuleManager";
import {useContext, useEffect} from "react";
import {Button, PageHeader, Tag} from "antd";
//PAGES
import LoginPage from "./loginPages/login/LoginPage";
import styled from "styled-components";
import {cryptoEnvironment} from "../../environment/Env";

export interface LoginModuleContextProps{
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
  background: ${cryptoEnvironment.styles.mainColor};
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

const LoginModule = (props:ModuleViewControls)=>{
    // @ts-ignore
    const contextProps:LoginModuleContextProps = useContext(ViewModuleManagerContext);
    // @ts-ignore
    const loginStatus = useSelector((store: Store) =>store.userReducer.userDetails);

    // @ts-ignore
    const children = props.children
    return (
        <Div>
            <Header>
                <Name>CryptoKnowledgeCenter</Name>
            </Header>
            <Body>
                {children}
            </Body>
        </Div>
    );
}


export const LoginMetaProps:ModuleMetaProps<LoginModuleContextProps>={
    name:"Login",
    MainComponent:LoginModule,
    Component:LoginPage,
    contextValues:{
        test:"kINGKONG"
    }

}


