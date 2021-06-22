import {ModuleViewControls} from "../../../../components/viewModuleManager/ViewModuleManagerType";
import {useContext, useEffect, useState} from "react";
import {ViewModuleManagerContext} from "../../../../components/viewModuleManager/ViewModuleManager";
import styled from "styled-components";
import {Button,Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import {HomeModuleContextProps} from "../../HomeModule";
import {UserDetails} from "../../../../store/userReducer/UserReducer";
import {Store} from "../../../../store/Store";

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #61dafb;
  overflow: hidden;
`


export default (props: ModuleViewControls) => {
    const history = useHistory();
    const dispatch = useDispatch();
    // @ts-ignore
    const contextProps: HomeModuleContextProps = useContext(ViewModuleManagerContext);
    const userDetails: UserDetails = useSelector((store: Store) => {
        return store.userReducer.userDetails
    });
    const initialized: boolean = useSelector((store: Store) => {

        return store.userReducer.initialized;
    });


    useEffect(() => {
        if(!initialized){
           history.push("/");
        }

    }, []);

    return (
        <Div>
            OVERVIEW
        </Div>
    );
};


