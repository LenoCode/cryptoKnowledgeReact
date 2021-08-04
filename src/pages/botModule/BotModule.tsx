import {ModuleMetaProps, ModuleViewControls} from "../../components/viewModuleManager/ViewModuleManagerType";
import {useContext, useEffect, useState} from "react";
import {ViewModuleManagerContext} from "../../components/viewModuleManager/ViewModuleManager";
import styled from "styled-components";
import OverviewPage from "./botPages/main/MainPage";
import { MenuOutlined } from "@ant-design/icons";
import {cryptoEnvironment} from "../../environment/Env";
import {Menu} from "antd";
import {onMenuCircleWheelScroll} from "./BotModuleFunctions";
import CircleNavigationMenu, {CircleItem} from "../../components/navigator/CircleNavigationMenu";


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

const MenuCircleDiv = styled.div`
  align-self: center;
  width: 40px;
  height: 100px;
  border-radius: 100px;
`;


const ClickedMenuCircleButton = styled.button`
  position: relative;
  width: 75px;
  height: 75px;
  border-radius: 100px;
  background: ${cryptoEnvironment.styles.thirdColor};
  box-shadow: 1px 1px 15px 2px   ${cryptoEnvironment.styles.mainColor};
  border-color: black;

`
const NotClickedMenuCircleButton = styled.button`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background: ${cryptoEnvironment.styles.mainColor};
  box-shadow: 1px 1px 15px 2px ${cryptoEnvironment.styles.thirdColor};
  border-color: black;
  left:-45px;
`





const MenuCircle = styled.div`
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 100px;

  bottom: 120px;
  background: #61dafb;
`;


const createMenuText = (topPx:string,leftPx: string, text: string) => {
    const MenuText = styled.p`
      position: relative;
      font-size: 20px;
      width: 100px;
      left: ${leftPx}px;
      bottom: ${topPx}px;
      color: black;
      cursor: default;
    `
    return <MenuText>{text}</MenuText>
};



export interface BotModuleContextProps{
    test:string
}

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

]

const BotModule = (props:ModuleViewControls)=>{
    // @ts-ignore
    const contextProps:BotModuleContextProps = useContext(ViewModuleManagerContext);
    const [menuClicked,setMenuClicked] = useState(false);
    const [menuItemPixels,setMenuItemPixels] = useState({
        angle:0,
        x:{
            UserPanel:0,
            CreateBot:73
        },
        y:{
            UserPanel:75,
            CreateBot:22
        }
    });

    // @ts-ignore
    const children = props.children;

    useEffect(()=>{

    },[])

    const UserPanel= createMenuText(`${menuItemPixels.y.UserPanel}`,`${menuItemPixels.x.UserPanel}`,"User panel")
    return (
        <Div>
            <MenuCircleDiv>
                {!menuClicked
                    ? <NotClickedMenuCircleButton onClick={() => setMenuClicked(true)}/>
                    : <CircleNavigationMenu width={50} height={50} items={items}/>
                }
            </MenuCircleDiv>
            <Body>
                {children}
            </Body>
        </Div>
    );
}


export const BotModuleProps:ModuleMetaProps<BotModuleContextProps>={
    name:"Bot",
    MainComponent:BotModule,
    Component:OverviewPage,
    contextValues:{
        test:"dasda"
    }

}