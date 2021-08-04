import {ModuleViewControls} from "../../../../components/viewModuleManager/ViewModuleManagerType";
import {useContext, useEffect, useState} from "react";
import {ViewModuleManagerContext} from "../../../../components/viewModuleManager/ViewModuleManager";
import styled from "styled-components";
import {Button,Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import {AdministrationModuleContextProps} from "../../AdministrationModule";
import CircleNavigationMenu,{CircleNavigationMenuProps,CircleItem} from "../../../../components/navigator/CircleNavigationMenu";

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`








export default (props: ModuleViewControls) => {

    const items:Array<CircleItem> = [
        {
            name:"O",
            onClick:()=>{}
        },
        {
            name:"O",
            onClick:()=>{}
        },
        {
            name:"O",
            onClick:()=>{}
        },
        {
            name:"O",
            onClick:()=>{}
        },
        {
            name:"O",
            onClick:()=>{}
        },
        {
            name:"O",
            onClick:()=>{}
        },
        {
            name:"O",
            onClick:()=>{}
        },
        {
            name:"O",
            onClick:()=>{}
        },
        {
            name:"O",
            onClick:()=>{}
        },
        {
            name:"O",
            onClick:()=>{}
        },
        {
            name:"O",
            onClick:()=>{}
        },
        {
            name:"O",
            onClick:()=>{}
        },
        {
            name:"O",
            onClick:()=>{}
        },
        {
            name:"O",
            onClick:()=>{}
        },
        {
            name:"O",
            onClick:()=>{}
        },
        {
            name:"O",
            onClick:()=>{}
        },

    ]
    return (
        <Div>
            <Content>
                <CircleNavigationMenu width={200} height={200} items={items}/>
            </Content>
        </Div>
    );
};


