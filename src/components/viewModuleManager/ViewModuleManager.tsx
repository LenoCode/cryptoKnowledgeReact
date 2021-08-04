import {ModuleViewControls, ViewModuleManagerProps} from "./ViewModuleManagerType";
import React, {Component, useEffect, useState,useContext} from "react";
import {UserDetails} from "../../store/userReducer/UserReducer";
import {useSelector} from "react-redux";
import {Store} from "../../store/Store";
import styled from "styled-components";
import {cryptoEnvironment} from "../../environment/Env";
import {AppstoreOutlined, HomeOutlined} from "@ant-design/icons";
import {Popover} from "antd";
import ModuleListDiv from "./actionBar/ModuleListDiv";
import {useHistory} from "react-router-dom";


const iconStyles = {
    color:"white",
    width:"80px",
    height:"100%",
    fontSize: "35px",
    marginTop:"6px",
    marginLeft:"45px",
}



const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`


const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  overflow: hidden;
  margin-bottom: 2px;
  background: ${cryptoEnvironment.styles.mainColor};
`

const Body = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`


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
    const history = useHistory();
    const [moduleState,setModuleState] = useState(props.module.contextValues);
    const [component, setComponent] = useState(null);
    const moduleViewControl:ModuleViewControls = createModuleViewControls(setComponent);
    const initialized: boolean = useSelector((store: Store) => {
        return store.userReducer.initialized;
    });


    useEffect(() => {
        if(!initialized){
            history.push("/");
        }else{
            // @ts-ignore
            setComponent(<props.module.Component viewControl={moduleViewControl.viewControl}/>);
        }
    }, []);

    useEffect(() => {
        // @ts-ignore
        setComponent(<props.module.Component viewControl={moduleViewControl.viewControl}/>);
        setModuleState(props.module.contextValues)
    }, [props.module.name]);

    return (
        <MainDiv>

            {initialized &&
                <HeaderDiv>
                    <HomeOutlined onClick={()=>{history.push("/crypto/")}} style={iconStyles} />

                    <Popover content={ModuleListDiv}
                             trigger={"click"}>
                        <AppstoreOutlined style={iconStyles} />
                    </Popover>
                </HeaderDiv>
            }
            <Body>
                <ViewModuleManagerContext.Provider value={moduleState}>

                    <props.module.MainComponent viewControl={moduleViewControl.viewControl}>
                        {component}
                    </props.module.MainComponent>
                </ViewModuleManagerContext.Provider>
            </Body>

        </MainDiv>

    );
}