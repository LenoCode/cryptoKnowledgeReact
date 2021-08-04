import {ModuleViewControls} from "../../../../components/viewModuleManager/ViewModuleManagerType";
import {useContext, useEffect, useState} from "react";
import {ViewModuleManagerContext} from "../../../../components/viewModuleManager/ViewModuleManager";
import styled from "styled-components";
import {Button,Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import {BotModuleContextProps} from "../../BotModule";

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`




export default (props: ModuleViewControls) => {
    const dispatch = useDispatch();
    // @ts-ignore
    const contextProps: BotModuleContextProps = useContext(ViewModuleManagerContext);



    return (
        <Div>
            <Content>
                <p>BOT OVERVIEW PAGE</p>
            </Content>

        </Div>
    );
};


