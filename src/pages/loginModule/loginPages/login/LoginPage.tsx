import {ModuleViewControls} from "../../../../components/viewModuleManager/ViewModuleManagerType";
import {LoginModuleContextProps} from "../../LoginModule";
import {useContext, useEffect, useState} from "react";
import {ViewModuleManagerContext} from "../../../../components/viewModuleManager/ViewModuleManager";
import Register from "../register/Register";
import styled from "styled-components";
import {Button,Input} from "antd";
import {checkForToken, getUserDetailsFromToken, onClickLogin} from "./LoginFunctions";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import {Store} from "../../../../store/Store";
import {cryptoEnvironment} from "../../../../environment/Env";

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;
  justify-content: space-evenly;
  align-self: center;
  margin: auto;
  overflow: hidden;
`



export default (props:ModuleViewControls)=>{
    const history = useHistory();
    const dispatch = useDispatch()
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const contextProps: LoginModuleContextProps = useContext(ViewModuleManagerContext);
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [loginClicked,setLoginClicked] = useState(false);
    const initialized = useSelector((store:Store) =>{return store.userReducer.initialized});

    useEffect(()=>{
        if (checkForToken() && !initialized) {
            getUserDetailsFromToken(dispatch, history);
            //props.viewControl.changeViewSubPage(Register);
        }
    },[loginClicked])

    return (
        <Div>
            <LoginForm>
                <Input placeholder={"Username"} size={"large"} onChange={ (e)=>{setUsername(e.target.value)}}
                       style={{width:"60%",height:"40px",alignSelf:"center"}}/>

                <Input.Password placeholder={"Password"} size={"large"} onChange={ (e)=>{setPassword(e.target.value)}}
                                style={{width:"60%",height:"40px",alignSelf:"center"}}/>

                <Button onClick={()=>{onClickLogin(username,password,setLoginClicked)}} type={"primary"} size={"large"} style={  {width:'40%',height:"40px",alignSelf:"center",letterSpacing:"1px",background:`${cryptoEnvironment.styles.mainColor}`}  }>Login</Button>
            </LoginForm>
        </Div>
    );
}


