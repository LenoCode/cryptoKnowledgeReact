import {ModuleViewControls} from "../../../../components/viewModuleManager/ViewModuleManagerType";
import {LoginModuleContextProps} from "../../LoginModule";
import {useContext, useState} from "react";
import {ViewModuleManagerContext} from "../../../../components/viewModuleManager/ViewModuleManager";
import {findAllByDisplayValue} from "@testing-library/react";
import Register from "../register/Register";
import styled from "styled-components";
import {Button,Input} from "antd";


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
    // @ts-ignore
    const contextProps: LoginModuleContextProps = useContext(ViewModuleManagerContext);
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    return (
        <Div>
            <LoginForm>
                <Input placeholder={"Username"} size={"large"} onChange={ (e)=>{setUsername(e.target.value)}}
                       style={{width:"60%",height:"40px",alignSelf:"center"}}/>

                <Input.Password placeholder={"Password"} size={"large"} onChange={ (e)=>{setPassword(e.target.value)}}
                                style={{width:"60%",height:"40px",alignSelf:"center"}}/>

                <Button type={"primary"} size={"large"} style={  {width:'40%',height:"40px",alignSelf:"center",letterSpacing:"1px"}  }>Login</Button>
            </LoginForm>
        </Div>
    );
}


